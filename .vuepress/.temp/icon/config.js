import { hasGlobalComponent } from "/media/edgw_/ws/edgw-pages/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.118_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc.26_@_cff9eb5b88fb6a429afb371eb704a643/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "/media/edgw_/ws/edgw-pages/node_modules/.pnpm/@vueuse+core@14.0.0_vue@3.5.24/node_modules/@vueuse/core/dist/index.js";
import { h } from "vue";
import { VPIcon } from "/media/edgw_/ws/edgw-pages/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0-rc.118_markdown-it@14.1.0_vuepress@2.0.0-rc.26_@vuepress+bu_0f51048e4d5c8d513a1f3b5ece82b42d/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "fa6-solid:",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
