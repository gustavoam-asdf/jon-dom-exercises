export default class Video extends HTMLVideoElement {
  public source: HTMLSourceElement
  static className = "asset-video"
  static elementName = "asset-video"

  constructor({
    src,
    sources,
    className,
    controls,
    loop
  }: {
    src: string
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

    this.source = document.createElement("source")
    this.source.setAttribute("src", src)
    this.append(this.source)

    sources.forEach(source => {
      source.matcher?.addEventListener("change", () => {
        const source = sources.find(source => source.matcher?.matches)
        this.source.setAttribute("src", source?.src || src)
        this.load()
      })
    })

    this.insertAdjacentText(
      "beforeend",
      "Sorry, your browser doesn't support embedded videos."
    )
  }
}

customElements.define(Video.elementName, Video, {
  extends: "video"
})
