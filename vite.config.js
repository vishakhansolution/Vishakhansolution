import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // CRITICAL: base must be "/" to ensure absolute paths work on refresh
  base: "/", 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Ensures the build output is clean for Vercel
    outDir: "dist",
    assetsDir: "assets",
  },
});