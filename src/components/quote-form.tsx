"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowUpRight, Check, MessageCircle, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { categories } from "@/data/categories";
import { buildQuoteMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import {
  customerTypes,
  getCategoryLabel,
  parseQuoteRequest,
  type QuoteRequestValues,
} from "@/lib/validation";
import { cn } from "@/lib/utils";

type FieldName = keyof QuoteRequestValues;
type FieldErrors = Partial<Record<FieldName, string>>;

const initialValues: QuoteRequestValues = {
  name: "",
  customerType: "",
  category: "",
  quantity: "",
  phone: "",
  notes: "",
};

export function QuoteForm() {
  const [values, setValues] = useState<QuoteRequestValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const [preparedUrl, setPreparedUrl] = useState("");
  const statusRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  const handleChange =
    (field: FieldName) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value = event.target.value;
      setValues((current) => ({ ...current, [field]: value }));
      setErrors((current) => ({ ...current, [field]: undefined }));
      setStatus("idle");
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = parseQuoteRequest(values);

    if (!result.success) {
      const nextErrors: FieldErrors = {};

      for (const issue of result.error.issues) {
        const key = issue.path[0];

        if (typeof key === "string" && !nextErrors[key as FieldName]) {
          nextErrors[key as FieldName] = issue.message;
        }
      }

      setErrors(nextErrors);
      setStatus("idle");
      window.setTimeout(() => errorRef.current?.focus(), 30);
      return;
    }

    const message = buildQuoteMessage(
      {
        name: result.data.name,
        customerType: result.data.customerType,
        category: result.data.category,
        quantity: result.data.quantity,
        phone: result.data.phone,
        notes: result.data.notes,
      },
      getCategoryLabel(result.data.category),
    );

    const url = buildWhatsAppUrl(siteConfig.whatsapp.number, message);
    setPreparedUrl(url);
    setStatus("ready");
    setErrors({});

    // Tidak membuka tab otomatis: pengguna menekan tautan WhatsApp secara sadar,
    // sehingga tidak bergantung pada izin pop-up dan isi pesan bisa diperiksa dulu.
    window.setTimeout(() => statusRef.current?.focus(), 50);
  };

  const errorList = Object.entries(errors).filter(([, message]) => Boolean(message));

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4 border-b border-line pb-6">
        <div>
          <p className="eyebrow">Formulir Penawaran</p>
          <h2 className="mt-3 text-2xl text-charcoal">Ceritakan kebutuhan Anda</h2>
        </div>
        <span className="mt-1 hidden rounded-[3px] border border-line px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-muted sm:inline-block">
          Tanpa akun
        </span>
      </div>

      {errorList.length > 0 ? (
        <div
          ref={errorRef}
          tabIndex={-1}
          role="alert"
          aria-live="assertive"
          className="mt-6 rounded-[3px] border border-[#b4472f]/30 bg-[#b4472f]/[0.06] px-4 py-3 text-sm text-[#8c3522] outline-none"
        >
          <p className="font-semibold">Periksa kembali isian berikut:</p>
          <ul className="mt-1.5 list-disc space-y-1 pl-5">
            {errorList.map(([field, message]) => (
              <li key={field}>{message}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="quote-name" className="field-label">
            Nama Anda <span aria-hidden="true">*</span>
          </label>
          <input
            id="quote-name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange("name")}
            placeholder="Nama atau nama usaha"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "quote-name-error" : undefined}
            className="field"
          />
          {errors.name ? (
            <p id="quote-name-error" className="mt-1.5 text-xs text-[#8c3522]">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="quote-customer-type" className="field-label">
            Jenis Pelanggan <span aria-hidden="true">*</span>
          </label>
          <select
            id="quote-customer-type"
            name="customerType"
            value={values.customerType}
            onChange={handleChange("customerType")}
            required
            aria-required="true"
            aria-invalid={Boolean(errors.customerType)}
            aria-describedby={errors.customerType ? "quote-customer-type-error" : undefined}
            className="field"
          >
            <option value="">Pilih jenis pelanggan</option>
            {customerTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.customerType ? (
            <p id="quote-customer-type-error" className="mt-1.5 text-xs text-[#8c3522]">
              {errors.customerType}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="quote-category" className="field-label">
            Kebutuhan Produk <span aria-hidden="true">*</span>
          </label>
          <select
            id="quote-category"
            name="category"
            value={values.category}
            onChange={handleChange("category")}
            required
            aria-required="true"
            aria-invalid={Boolean(errors.category)}
            aria-describedby={errors.category ? "quote-category-error" : undefined}
            className="field"
          >
            <option value="">Pilih kategori</option>
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
            <option value="campuran">Campuran / belum ditentukan</option>
          </select>
          {errors.category ? (
            <p id="quote-category-error" className="mt-1.5 text-xs text-[#8c3522]">
              {errors.category}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="quote-quantity" className="field-label">
            Estimasi Jumlah
          </label>
          <input
            id="quote-quantity"
            name="quantity"
            type="text"
            value={values.quantity}
            onChange={handleChange("quantity")}
            placeholder="Contoh: 20 kg per minggu"
            aria-invalid={Boolean(errors.quantity)}
            aria-describedby={errors.quantity ? "quote-quantity-error" : "quote-quantity-hint"}
            className="field"
          />
          <p id="quote-quantity-hint" className="mt-1.5 text-xs text-muted">
            Boleh perkiraan; satuan akhir dikonfirmasi tim.
          </p>
          {errors.quantity ? (
            <p id="quote-quantity-error" className="mt-1.5 text-xs text-[#8c3522]">
              {errors.quantity}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="quote-phone" className="field-label">
            Nomor Kontak <span className="font-normal normal-case tracking-normal text-muted">(opsional)</span>
          </label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            value={values.phone}
            onChange={handleChange("phone")}
            placeholder="08xx xxxx xxxx"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "quote-phone-error" : undefined}
            className="field"
          />
          {errors.phone ? (
            <p id="quote-phone-error" className="mt-1.5 text-xs text-[#8c3522]">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="quote-notes" className="field-label">
            Catatan Tambahan
          </label>
          <textarea
            id="quote-notes"
            name="notes"
            rows={4}
            value={values.notes}
            onChange={handleChange("notes")}
            placeholder="Jenis produk, kebutuhan rutin, atau detail lain yang perlu diketahui tim."
            aria-invalid={Boolean(errors.notes)}
            aria-describedby={errors.notes ? "quote-notes-error" : "quote-notes-hint"}
            className="field resize-y"
          />
          <p id="quote-notes-hint" className="mt-1.5 text-xs text-muted">
            Maksimal 600 karakter. Jangan mencantumkan data sensitif.
          </p>
          {errors.notes ? (
            <p id="quote-notes-error" className="mt-1.5 text-xs text-[#8c3522]">
              {errors.notes}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-muted">
          Formulir ini tidak menyimpan data di server. Setelah dikirim, Anda akan diarahkan ke
          WhatsApp untuk meneruskan pesan kepada tim HAFERA FRESH.
        </p>
        <button type="submit" className="btn btn-primary shrink-0">
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Siapkan Pesan WhatsApp
        </button>
      </div>

      {siteConfig.whatsapp.isPlaceholder ? (
        <p className="mt-4 text-xs leading-relaxed text-[#8c3522]">
          Catatan pengembangan: nomor WhatsApp resmi belum dikonfigurasi, sehingga tautan WhatsApp
          pada versi ini belum dapat digunakan. Lihat README untuk pengisian nomor.
        </p>
      ) : null}

      {status === "ready" ? (
        <div
          ref={statusRef}
          tabIndex={-1}
          aria-live="polite"
          className="mt-6 rounded-[3px] border border-deep/15 bg-ivory p-5 outline-none"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-deep text-ivory">
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-deep">Pesan siap dikirim melalui WhatsApp</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                Periksa kembali pesan Anda, lalu buka WhatsApp dan tekan tombol kirim. Pesan belum
                terkirim sebelum Anda menekannya di WhatsApp.
              </p>
              <a
                href={preparedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-4"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Buka WhatsApp
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      ) : null}

      <p
        className={cn(
          "mt-4 flex items-center gap-2 text-[0.6875rem] text-muted",
          status === "ready" && "hidden",
        )}
      >
        <ShieldCheck className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
        Validasi dilakukan di perangkat Anda sebelum WhatsApp dibuka.
      </p>
    </form>
  );
}
