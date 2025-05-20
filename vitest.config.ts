import path from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         "@/components": path.resolve(__dirname, "src/components"),
         "@/features": path.resolve(__dirname, "src/features"),
      },
   },
   test: {
      environment: "jsdom",
      globals: true,
      include: ["src/**/*.spec.{ts,tsx}"],
   },
});
