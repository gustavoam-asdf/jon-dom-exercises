const detectMediaQueryActive = (sources: Source[]) =>
  sources
    .filter(source => source.matcher)
    .find(source => source.matcher?.matches)

export default class Video {
  public self: HTMLDivElement
  public video?: HTMLVideoElement
  public source?: HTMLSourceElement

  public src: string
  public sources: Source[]
  static className = "asset-video"

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
    this.sources = sources
    this.src = src
    this.self = this.template({ className, controls, loop })

    sources.forEach(source =>
      source.matcher?.addEventListener("change", () => {
        this.source?.setAttribute(
          "src",
          detectMediaQueryActive(sources)?.src || src
        )
        this.video?.load()
      })
    )
  }

  private template({
    className,
    controls,
    loop
  }: {
    className?: string
    controls?: boolean
    loop?: boolean
  }) {
    const videoWrapper = document.createElement("div")
    videoWrapper.classList.add(Video.className)

    this.video = document.createElement("video")
    controls && this.video.setAttribute("controls", "")
    loop && this.video.setAttribute("loop", "")
    className && this.video.classList.add(className)

    this.source = document.createElement("source")
    this.source.setAttribute(
      "src",
      detectMediaQueryActive(this.sources)?.src || this.src
    )

    this.video.append(this.source)
    this.video.insertAdjacentText(
      "beforeend",
      "Sorry, your browser doesn't support embedded videos."
    )

    videoWrapper.append(this.video)

    return videoWrapper
  }
}
