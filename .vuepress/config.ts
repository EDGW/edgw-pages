import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "kako's space",
      description: "Welcome to kako's space",
    }
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
