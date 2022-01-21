const detectMediaQueryActive = (sources: Source[]) =>
  sources
    .filter(source => source.matcher)
    .find(source => source.matcher?.matches)

export default class Video extends HTMLVideoElement {
  public source: HTMLSourceElement
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

    controls && this.setAttribute("controls", "")
    loop && this.setAttribute("loop", "")
    className && this.classList.add(className)

    this.source = document.createElement("source")
    this.source.setAttribute("src", detectMediaQueryActive(sources)?.src || src)
    this.append(this.source)

    sources.forEach(source => {
      source.matcher?.addEventListener("change", () => {
        this.source.setAttribute(
          "src",
          detectMediaQueryActive(sources)?.src || src
        )
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
