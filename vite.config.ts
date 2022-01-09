import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import eslint from "@rollup/plugin-eslint"

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    { ...eslint({ include: "src/**/*.+(js|ts)" }), enforce: "pre" }
  ],
  base: "/jon-dom-exercises/",
  server: {
    port: 5500
  },
  build: {
    outDir: "./build"
  }
})
