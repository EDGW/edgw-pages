import { CodeTabs } from "/media/edgw_/ws/edgw-pages/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.118_markdown-it@14.1.0_vuepress@2.0.0-rc.26_@vue_7565f791ed263345c1b620485acd4dc1/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/media/edgw_/ws/edgw-pages/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.118_markdown-it@14.1.0_vuepress@2.0.0-rc.26_@vue_7565f791ed263345c1b620485acd4dc1/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/media/edgw_/ws/edgw-pages/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.118_markdown-it@14.1.0_vuepress@2.0.0-rc.26_@vue_7565f791ed263345c1b620485acd4dc1/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
