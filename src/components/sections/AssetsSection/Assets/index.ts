import "./styles.css"

export default class Assets implements SectionChild {
  public self: HTMLDivElement
  public updater?: NodeJS.Timer
  static className = "assets"

  constructor() {
    this.self = this.template()
    ;`
      <picture>
        <source
          media="(min-width: 600px)"
          srcset="https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?cs=srgb&dl=pexels-laura-the-explaura-3608263.jpg&fm=jpg"
        />
        <img
          style="max-width: 100%; display: block;"
          src="https://images.pexels.com/photos/9713163/pexels-photo-9713163.jpeg?cs=srgb&dl=pexels-eriks-cistovs-9713163.jpg&fm=jpg"
          alt="foto"
        />
      </picture>
    `
  }

  private template() {
    const assets = document.createElement("div")
    assets.classList.add(Assets.className)
    return assets
  }
}
