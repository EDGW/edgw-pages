export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/media/edgw_/ws/edgw-pages/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home","icon":"house"} }],
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"/media/edgw_/ws/edgw-pages/.vuepress/.temp/pages/intro.html.js"), meta: {"excerpt":"\n<p>I'm <strong>EDGW_</strong>, and you can call me <strong>Kako</strong> as well.</p>\n<p>Try access this website through both <a href=\"https://blog.edgw.cc\" target=\"_blank\" rel=\"noopener noreferrer\">EDGW_'s Space</a> and <a href=\"https://kakosan.com\" target=\"_blank\" rel=\"noopener noreferrer\">Kako's Space</a></p>","readingTime":{"minutes":0.11,"words":33},"title":"Intro Page","icon":"circle-info","type":"article"} }],
  ["/posts/", { loader: () => import(/* webpackChunkName: "posts_index.html" */"/media/edgw_/ws/edgw-pages/.vuepress/.temp/pages/posts/index.html.js"), meta: {"excerpt":"\n<p>Oh no, there are currently no posts.</p>\n","readingTime":{"minutes":0.04,"words":11},"title":"My Posts","icon":"book","type":"article"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/media/edgw_/ws/edgw-pages/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"/media/edgw_/ws/edgw-pages/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Category","index":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"/media/edgw_/ws/edgw-pages/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tag","index":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"/media/edgw_/ws/edgw-pages/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles","index":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"/media/edgw_/ws/edgw-pages/.vuepress/.temp/pages/star/index.html.js"), meta: {"title":"Star","index":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"/media/edgw_/ws/edgw-pages/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline","index":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
