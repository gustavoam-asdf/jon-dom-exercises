import Icon from "@components/Icon"
import PageControl from "@components/PageControl"
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
    document.addEventListener("scroll", () => {
      document.documentElement.scrollTop > 300
        ? this.self.removeClass("hide")
        : this.self.addClass("hide")
    })
  }

  action() {
    document.documentElement.scrollTop = 0
  }
}
