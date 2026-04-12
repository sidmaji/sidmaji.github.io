// @ts-check
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://sidmaji.github.io",
  vite: {
    // @ts-expect-error Vite's plugin types come from different package copies here.
    plugins: [tailwindcss()],
  },
})
