import Icon from "@components/Icon"
import PageControl from "@components/PageControl"
import { detectTheme, saveTheme, switchTheme } from "@utils/theme"
import "./styles.css"

const icons = { sun: "fa-sun", moon: "fa-moon" }

export default class ThemeControl {
  public self: PageControl
  public icon: Icon
  public initialIcon: string
  public themeData: ThemeData
  static className = "theme-button"

  constructor() {
    this.themeData = detectTheme()
    this.initialIcon = this.themeData.isDark ? icons.sun : icons.moon
    this.icon = new Icon({
      iconType: this.initialIcon,
      className: `${ThemeControl.className}__icon`
    })
    this.self = new PageControl(this.icon)
    this.self.addClass(ThemeControl.className)
  }

  action() {
    this.themeData = switchTheme(this.themeData)
    this.icon.switchIcon(
      this.initialIcon === icons.sun ? icons.moon : icons.sun
    )
    saveTheme(this.themeData)
  }
}
