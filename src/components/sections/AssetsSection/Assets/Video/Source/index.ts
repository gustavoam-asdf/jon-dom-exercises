const mediaQueryActive = (sources: SourceData[]) =>
	sources
		.filter(source => source.matcher)
		.find(source => source.matcher?.matches)

export default class Source {
	public self: HTMLSourceElement
	public defaultSrc: string
	public sources: SourceData[]
	static className = "asset-video__source"

	constructor(defaultSrc: string, sources: SourceData[]) {
		this.defaultSrc = defaultSrc
		this.sources = sources

		this.self = this.#template()
		this.assingMediaQueryActive()
	}

	public assingMediaQueryActive() {
		this.self.setAttribute(
			"src",
			mediaQueryActive(this.sources)?.src || this.defaultSrc
		)
	}

	#template() {
		const source = document.createElement("source")
		source.classList.add(Source.className)
		return source
	}
}
