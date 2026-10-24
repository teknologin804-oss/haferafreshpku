/**
 * Post-build adapter untuk Next.js 16 + `output: "export"`.
 *
 * Next 16 menulis payload RSC halaman sebagai direktori bersarang, mis.:
 *   out/tentang-kami/__next.tentang-kami/__PAGE__.txt
 *   out/produk/apel/__next.produk/$d$slug/__PAGE__.txt
 * Namun klien meminta nama berkas datar dengan pemisah titik:
 *   /tentang-kami/__next.tentang-kami.__PAGE__.txt
 *   /produk/apel/__next.produk.$d$slug.__PAGE__.txt
 *
 * Akibatnya setiap prefetch/navigasi klien menghasilkan 404 di hosting statis
 * (cPanel/Apache, Nginx, S3, GitHub Pages). Ini bug terdokumentasi:
 * https://github.com/vercel/next.js/issues/85374
 *
 * Skrip ini menyisipkan alias berkas datar di samping setiap payload
 * bersarang sehingga permintaan klien terpenuhi. Berkas asli tetap utuh.
 */

import { promises as fs } from "node:fs";
import path from "node:path";

const OUT_DIR = path.resolve("out");
const PAYLOAD_DIR_PREFIX = "__next.";

/** @param {string} dir @returns {Promise<string[]>} semua berkas .txt di dalam dir (rekursif) */
async function walkTxt(dir) {
  /** @type {string[]} */
  const files = [];
  let dirents;
  try {
    dirents = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return files;
  }
  for (const dirent of dirents) {
    const full = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      files.push(...(await walkTxt(full)));
    } else if (dirent.isFile() && full.endsWith(".txt")) {
      files.push(full);
    }
  }
  return files;
}

/** @param {string} dir @returns {Promise<string[]>} semua subdirektori (rekursif) */
async function walkDirs(dir) {
  /** @type {string[]} */
  const dirs = [];
  let dirents;
  try {
    dirents = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return dirs;
  }
  for (const dirent of dirents) {
    const full = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      dirs.push(full, ...(await walkDirs(full)));
    }
  }
  return dirs;
}

/** @param {string} p @returns {boolean} */
function isPayloadDir(p) {
  return path.basename(p).startsWith(PAYLOAD_DIR_PREFIX);
}

async function main() {
  try {
    await fs.access(OUT_DIR);
  } catch {
    console.error("[flatten-rsc] folder out/ tidak ditemukan — jalankan `next build` dulu.");
    process.exitCode = 1;
    return;
  }

  const allDirs = await walkDirs(OUT_DIR);
  const payloadDirs = allDirs.filter(isPayloadDir);

  let aliases = 0;

  for (const payloadDir of payloadDirs) {
    const parentDir = path.dirname(payloadDir);
    const files = await walkTxt(payloadDir);

    for (const file of files) {
      if (!file.endsWith(".txt")) continue;

      // Relatif terhadap induk payload, lalu gabungkan semua segmen dengan titik.
      const rel = path.relative(parentDir, file); // e.g. __next.produk/$d$slug/__PAGE__.txt
      const flatName = rel.split(path.sep).join(".");
      const flatPath = path.join(parentDir, flatName);

      // Jangan timpa berkas yang memang sudah ada (mis. __next._tree.txt datar).
      try {
        await fs.access(flatPath);
        continue;
      } catch {
        /* belum ada — buat alias */
      }

      await fs.copyFile(file, flatPath);
      aliases += 1;
    }
  }

  console.log(`[flatten-rsc] ${payloadDirs.length} payload bersarang, ${aliases} alias berkas datar dibuat.`);
}

await main();
