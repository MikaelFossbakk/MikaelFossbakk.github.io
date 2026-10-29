import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" gjør at siden fungerer uansett hvilken adresse den ligger på
export default defineConfig({
  plugins: [react()],
  base: "./",
});
