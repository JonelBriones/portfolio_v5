import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import scrollbarHide from "tailwind-scrollbar-hide";
import tailwindcss from "@tailwindcss/vite";
[scrollbarHide];

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
