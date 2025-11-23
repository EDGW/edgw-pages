import comp from "/media/edgw_/ws/edgw-pages/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"icon\":\"house\",\"title\":\"Home\",\"heroText\":\"I'm EDGW_\",\"tagline\":\"Or you can call me kako\",\"bgImage\":\"/assets/images/bg_blurred_white.jpg\",\"bgImageDark\":\"/assets/images/bg_blurred_blk.jpg\",\"bgImageStyle\":{\"background-attachment\":\"fixed\"},\"heroFullScreen\":true,\"highlights\":[{\"header\":null,\"description\":\"<br/><br/><br/><font color=\\\"white\\\">The background images are screenshots from my Minecraft servers.</font><br/><br/><br/>\",\"image\":null,\"bgImage\":\"/assets/images/bg.jpg\",\"bgImageDark\":\"/assets/images/bg.jpg\"},{\"header\":null,\"description\":null,\"image\":null,\"bgImage\":\"/assets/images/bg_blurred.jpg\",\"bgImageDark\":\"/assets/images/bg_blurred.jpg\",\"highlights\":[{\"title\":\"<font color=\\\"white\\\">My Github</font>\",\"details\":\"<font color=\\\"white\\\">Visit my repositories and projects</font>\",\"link\":\"https://github.com/EDGW_\"},{\"title\":\"<font color=\\\"white\\\">My Blog</font>\",\"details\":\"<font color=\\\"white\\\">Visit kako's space</font>\",\"link\":\".\"}]}],\"description\":\"This website is still in development.\"},\"readingTime\":{\"minutes\":0.35,\"words\":106},\"filePathRelative\":\"README.md\",\"excerpt\":\"<p>This website is still in development.</p>\\n\",\"autoDesc\":true}")
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
