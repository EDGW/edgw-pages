import comp from "/media/edgw_/ws/edgw-pages/.vuepress/.temp/pages/posts/index.html.vue"
const data = JSON.parse("{\"path\":\"/posts/\",\"title\":\"My Posts\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"book\",\"description\":\"My Posts Oh no, there are currently no posts.\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"My Posts\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"EDGW_\\\",\\\"url\\\":\\\"https://edgw.cc\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://edgw.cc/posts/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Kako's space\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"My Posts\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"My Posts Oh no, there are currently no posts.\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}]]},\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"posts/README.md\",\"excerpt\":\"\\n<p>Oh no, there are currently no posts.</p>\\n\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
