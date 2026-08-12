import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Caminhos relativos funcionam tanto na raiz quanto em /nome-do-repositorio/.
  base: "./",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"],
  },
  build: {
    outDir: "dist",
  },
});
