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
    console.log("Construyendo ScrollControl")
    // this.self.addClass(ScrollControl.className)
  }

  action() {
    console.log("Se ejecuta")
    // this.icon.switchIcon(icons.cross)
    // this.menu.list.self.classList.toggle("hide")
    // this.menu.self.classList.toggle("hide")
  }
}
