import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://aung-and-phoo.info",
  output: "static",
  trailingSlash: "ignore",
  build: {
    inlineStylesheets: "auto",
  },
});
