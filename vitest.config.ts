import { defineConfig } from "vitest/config";

export default defineConfig({
  server: {
    watch: {
      ignored: ["**/.next/**", "**/.turbo/**", "**/dist/**", "**/coverage/**"],
    },
  },
  test: {
    forceRerunTriggers: ["**/*"],
  },
});
