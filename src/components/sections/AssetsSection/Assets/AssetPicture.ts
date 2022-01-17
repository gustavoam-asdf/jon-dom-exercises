export default class AssetPicture extends HTMLPictureElement {
  static className = "asset-picture"
  static elementName = "asset-picture"

  constructor({
    mediaQuery,
    src,
    srcset,
    alt
  }: {
    mediaQuery: string
    src: string
    srcset: string
    alt?: string
  }) {
    super()
    this.setAttribute("is", AssetPicture.elementName)
    this.classList.add(AssetPicture.className)

    this.innerHTML = `
      <source
        media="${mediaQuery}"
        srcset="${srcset}"
      />
      <img
        style="max-width: 100%; display: block;"
        src="${src}"
        alt="${alt}"
      />
    `
  }
}

customElements.define(AssetPicture.elementName, AssetPicture, {
  extends: "picture"
})
