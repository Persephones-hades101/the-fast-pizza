import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    fs: { strict: false },
    // https: {
    //   key: "./myapp-privateKey.key",
    //   cert: "./myapp.crt",
    // },
  },
  plugins: [react()],
});
