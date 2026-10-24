import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "next-env.d.ts",
    "node_modules/**",
    "coverage/**",
    // Hasil generate tooling deploy (Cloudflare/Sites) — bukan kode aplikasi.
    ".open-next/**",
    ".wrangler/**",
    "freebuff-sites-build/**",
    "freebuff.open-next.config.ts",
  ]),
]);
