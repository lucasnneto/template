import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const envObj: Record<string, string> = {};
  envObj["TESTE"] = env.TESTE;
  return {
    plugins: [vue()],
    test: {
      globals: true,
      alias: {
        "@/": "./src/",
      },
      environment: "happy-dom",
      coverage: {
        provider: "istanbul",
        exclude: [
          "src/components/modais/**",
          "src/components/Toast.vue",
          "src/plugins/toast.ts",
        ],
      },
    },
    server: {
      port: 8080,
    },
    resolve: {
      alias: { "@": path.resolve(__dirname, "./src") },
    },
    define: {
      "process.env": envObj,
    },
  };
});
