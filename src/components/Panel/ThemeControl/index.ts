import Icon from "@components/Icon"
import PageControl from "@components/PageControl"
import { detectTheme, saveTheme, switchTheme } from "@utils/theme"
import "./styles.css"

const icons = { sun: "fa-sun", moon: "fa-moon" }

export default class ThemeControl {
	public self: PageControl
	public icon: Icon
	private initialIcon: string
	private targetIcon: string
	public themeData: ThemeData
	static className = "theme-button"

	constructor() {
		this.themeData = detectTheme()
		this.initialIcon = this.themeData.isDark ? icons.sun : icons.moon
		this.targetIcon = this.themeData.isDark ? icons.moon : icons.sun
		this.icon = new Icon({
			iconType: this.initialIcon,
			className: `${ThemeControl.className}__icon`
		})
		this.self = new PageControl(this.icon)
		this.self.addClass(ThemeControl.className)
	}

	action() {
		this.themeData = switchTheme(this.themeData)
		this.icon.switchIcon(this.targetIcon)
		saveTheme(this.themeData)
	}
}
