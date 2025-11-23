import { hasGlobalComponent } from "/media/edgw_/ws/edgw-pages/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.118_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc.26_@_cff9eb5b88fb6a429afb371eb704a643/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/media/edgw_/ws/edgw-pages/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.97_sass-embedded@1.93.3_sass@1.93.3_vuepress@2.0.0-_3f456054f390d13ef43df9b3e8228b04/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "/media/edgw_/ws/edgw-pages/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.97_sass-embedded@1.93.3_sass@1.93.3_vuepress@2.0.0-_3f456054f390d13ef43df9b3e8228b04/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "/media/edgw_/ws/edgw-pages/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.118_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc.26_@_cff9eb5b88fb6a429afb371eb704a643/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
