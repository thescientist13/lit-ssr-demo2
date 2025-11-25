import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    // output directory for bundled files
    outDir: "./build",
    emptyOutDir: false,

    // entry points that Vite will process
    rollupOptions: {
      input: {
        server: path.resolve(__dirname, "server/server.ts"),
      },
      output: {
        entryFileNames: "[name].js",
        format: "esm",
      },
      external: ['stream', 'http2', 'http', 'https', 'fs', 'path', 'lit', 'buffer'], // externals for server build
    },
  },
  resolve: {
    conditions: ["node"]
  }
});
