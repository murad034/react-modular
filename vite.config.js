import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    target: "esnext", // allow latest javascript features
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // "@": path.resolve(__dirname, "src"),
      "@modules": path.resolve(__dirname, "./src/modules"),
    },
  },
});
