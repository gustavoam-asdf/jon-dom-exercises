import Icon from "@components/Icon"
import PageControl from "@components/PageControl"
import root from "@components/Root"
import "./styles.css"

export default class ScrollControl {
  public self: PageControl
  public icon: Icon
  static className = "scroll-button"

  constructor() {
    this.icon = new Icon({
      iconType: "fa-arrow-up",
      className: `${ScrollControl.className}__icon`
    })
    this.self = new PageControl(this.icon)
    this.self.addClass(ScrollControl.className)
    this.self.addClass("hide")
    root.addEventListener("scroll", () => {
      root.scrollTop > 300
        ? this.self.removeClass("hide")
        : this.self.addClass("hide")
    })
  }

  action() {
    root.scrollTo({
      behavior: "smooth",
      top: 0
    })
  }
}
