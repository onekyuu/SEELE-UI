import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      provider: "playwright",
      instances: [{ browser: "chromium" }],
    },
    include: ["**/*.test.tsx"],
    exclude: [
      "**/components/index.ts", // 忽略所有位置的 components/index.ts
      "**/components/**/types.ts", // 忽略所有组件的类型文件
      "node_modules",
      "dist",
    ],
    // environment: "jsdom", // ✅ 使用 jsdom 模拟浏览器
    //  coverage: {
    //   reporter: ["text", "html"],
    // },
  },
});
