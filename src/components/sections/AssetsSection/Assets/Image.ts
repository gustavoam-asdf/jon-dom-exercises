export default class Image extends HTMLPictureElement {
	static className = "asset-image"
	static elementName = "asset-image"

	constructor({
		sources,
		src,
		className,
		alt
	}: {
		sources: SourceData[]
		src: string
		className?: string
		alt?: string
	}) {
		super()
		this.setAttribute("is", Image.elementName)
		this.classList.add(Image.className)

		this.innerHTML = `
      ${sources
				.map(
					source => `<source
            media="${source.mediaQuery}"
            srcset="${source.src}"
          />`
				)
				.join("")}
      <img
        class="${className || ""}"
        src="${src}"
        alt="${alt || ""}"
      />
    `
	}
}

customElements.define(Image.elementName, Image, {
	extends: "picture"
})
