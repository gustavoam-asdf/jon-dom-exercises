import Source from "./Source"

export default class Video {
	public self: HTMLDivElement
	public video?: HTMLVideoElement
	public source: Source

	public sources: SourceData[]
	static className = "asset-video"

	constructor({
		src,
		sources,
		className,
		controls,
		loop
	}: {
		src: string
		sources: SourceData[]
		className?: string
		controls?: boolean
		loop?: boolean
	}) {
		this.sources = sources
		this.source = new Source(src, sources)
		this.self = this.#template({ className, controls, loop })

		sources.forEach(source =>
			source.matcher?.addEventListener("change", () => {
				this.source.assingMediaQueryActive()
				this.video?.load()
			})
		)
	}

	#template({
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

		this.video.append(this.source.self)
		this.video.insertAdjacentText(
			"beforeend",
			"Sorry, your browser doesn't support embedded videos."
		)

		videoWrapper.append(this.video)

		return videoWrapper
	}
}
