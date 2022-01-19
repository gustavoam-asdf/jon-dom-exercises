export default class Video extends HTMLVideoElement {
  static className = "asset-video"
  static elementName = "asset-video"

  constructor({
    sources,
    className,
    controls,
    loop
  }: {
    sources: Source[]
    className?: string
    controls?: boolean
    loop?: boolean
  }) {
    super()
    this.setAttribute("is", Video.elementName)
    this.classList.add(Video.className)
    controls && this.setAttribute("controls", "")
    loop && this.setAttribute("loop", "")
    className && this.classList.add(className)
    this.innerHTML = `
      ${sources
        .map(
          source => `<source
            media="${source.mediaQuery}"
            src="${source.src}"
          />`
        )
        .join("")}
      Sorry, your browser doesn't support embedded videos.
    `
  }
}

customElements.define(Video.elementName, Video, {
  extends: "video"
})
