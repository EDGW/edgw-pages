import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "/media/edgw_/ws/edgw-pages/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.98_markdown-it@14.1.0_sass-embedded@1.93.3_sass@1.93.3_vue_e5d562b886db59472101e4e9fa7f000e/node_modules/vuepress-theme-hope/lib/bundle/exports/base.js";

import { defineCatalogInfoGetter } from "/media/edgw_/ws/edgw-pages/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.118_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0_7c7b2e8eaef99cb6ba270078e87ac445/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { Blog, BloggerInfo, SocialMedias, setupBlog } from "/media/edgw_/ws/edgw-pages/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.98_markdown-it@14.1.0_sass-embedded@1.93.3_sass@1.93.3_vue_e5d562b886db59472101e4e9fa7f000e/node_modules/vuepress-theme-hope/lib/bundle/exports/blog.js";
import "/media/edgw_/ws/edgw-pages/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.98_markdown-it@14.1.0_sass-embedded@1.93.3_sass@1.93.3_vue_e5d562b886db59472101e4e9fa7f000e/node_modules/vuepress-theme-hope/lib/bundle/styles/blog/bundle.scss";
import { GlobalEncrypt, LocalEncrypt } from "/media/edgw_/ws/edgw-pages/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.98_markdown-it@14.1.0_sass-embedded@1.93.3_sass@1.93.3_vue_e5d562b886db59472101e4e9fa7f000e/node_modules/vuepress-theme-hope/lib/bundle/exports/encrypt.js";
import "/media/edgw_/ws/edgw-pages/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.98_markdown-it@14.1.0_sass-embedded@1.93.3_sass@1.93.3_vue_e5d562b886db59472101e4e9fa7f000e/node_modules/vuepress-theme-hope/lib/bundle/styles/encrypt/bundle.scss"

import "/media/edgw_/ws/edgw-pages/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.118_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc.26_@_cff9eb5b88fb6a429afb371eb704a643/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "/media/edgw_/ws/edgw-pages/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.118_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc.26_@_cff9eb5b88fb6a429afb371eb704a643/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "/media/edgw_/ws/edgw-pages/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.118_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc.26_@_cff9eb5b88fb6a429afb371eb704a643/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "/media/edgw_/ws/edgw-pages/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.98_markdown-it@14.1.0_sass-embedded@1.93.3_sass@1.93.3_vue_e5d562b886db59472101e4e9fa7f000e/node_modules/vuepress-theme-hope/lib/bundle/styles/bundle.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    Blog,
  }
};
