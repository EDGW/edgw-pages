import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Kako's space",
      description: "Welcome to Kako's space",
    }
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
