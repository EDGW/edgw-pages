import comp from "/media/edgw_/ws/edgw-pages/.vuepress/.temp/pages/intro.html.vue"
const data = JSON.parse("{\"path\":\"/intro.html\",\"title\":\"Intro Page\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"circle-info\",\"description\":\"Intro Page I'm EDGW_, and you can call me Kako as well. Try access this website through both EDGW_'s Space and Kako's Space\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Intro Page\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"EDGW_\\\",\\\"url\\\":\\\"https://edgw.cc\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://edgw.cc/intro.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Kako's space\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Intro Page\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Intro Page I'm EDGW_, and you can call me Kako as well. Try access this website through both EDGW_'s Space and Kako's Space\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}]]},\"readingTime\":{\"minutes\":0.11,\"words\":33},\"filePathRelative\":\"intro.md\",\"excerpt\":\"\\n<p>I'm <strong>EDGW_</strong>, and you can call me <strong>Kako</strong> as well.</p>\\n<p>Try access this website through both <a href=\\\"https://blog.edgw.cc\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">EDGW_'s Space</a> and <a href=\\\"https://kakosan.com\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Kako's Space</a></p>\",\"autoDesc\":true}")
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
