import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  site: "https://einschmidt.github.io",
  vite: {
    plugins: [tailwindcss()]
  }
});
