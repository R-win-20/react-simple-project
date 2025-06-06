import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Optional: Ensure pdfjs-dist is resolved correctly
      "pdfjs-dist": path.resolve(__dirname, "node_modules/pdfjs-dist"),
    },
  },
  optimizeDeps: {
    include: ["pdfjs-dist"], // Ensure pdfjs-dist is pre-bundled
  },
  worker: {
    format: "es",
  },
});
