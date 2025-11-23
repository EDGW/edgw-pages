import CodeDemo from "/media/edgw_/ws/edgw-pages/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.98_markdown-it@14.1.0_sass-embedded@1.93.3_sass@1.9_58904175830bf63853a98f1e8340fcf4/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/media/edgw_/ws/edgw-pages/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.98_markdown-it@14.1.0_sass-embedded@1.93.3_sass@1.9_58904175830bf63853a98f1e8340fcf4/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
