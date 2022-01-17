import { $ } from "@utils/selector"
import AssetPicture from "./AssetPicture"
import "./styles.css"

export default class Assets implements SectionChild {
  public self: HTMLDivElement
  public updater?: NodeJS.Timer
  static className = "assets"

  constructor() {
    this.self = this.template()
    setTimeout(() => {
      $(document.documentElement, '[href="#assets"]').click()
    }, 1000)
  }

  private template() {
    const assets = document.createElement("div")
    assets.classList.add(Assets.className)

    const picture = new AssetPicture({
      mediaQuery: "(min-width: 768px)",
      src: "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?cs=srgb&dl=pexels-laura-the-explaura-3608263.jpg&fm=jpg",
      srcset:
        "https://images.pexels.com/photos/9713163/pexels-photo-9713163.jpeg?cs=srgb&dl=pexels-eriks-cistovs-9713163.jpg&fm=jpg"
    })

    assets.append(picture)

    return assets
  }
}
