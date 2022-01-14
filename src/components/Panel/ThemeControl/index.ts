import Icon from "@components/Icon"
import PageControl from "@components/PageControl"
import { $ } from "@utils/selector"
import "./styles.css"

export default class ThemeControl {
  public self: PageControl
  public icon: Icon
  static className = "theme-button"

  constructor() {
    this.icon = new Icon({
      iconType: "fa-moon",
      className: `${ThemeControl.className}__icon`
    })
    this.self = new PageControl(this.icon)
    this.self.addClass(ThemeControl.className)
  }

  action() {
    $(document.documentElement, "#root").classList.toggle("dark")
    this.icon.switchIcon("fa-sun")
  }
}
