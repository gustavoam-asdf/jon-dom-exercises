import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [tsconfigPaths()],
  base: "/jon-dom-exercises/",
  server: {
    port: 5500
  },
  build: {
    outDir: "./build"
  }
})
