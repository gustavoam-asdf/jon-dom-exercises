import Icon from "@components/Icon"
import PageControl from "@components/PageControl"
import Menu from "@components/Panel/Menu"
import "./styles.css"

export const icons = { hamburger: "fa-bars", cross: "fa-times" }

export default class MenuControl {
	public self: PageControl
	public icon: Icon
	public menu: Menu
	static className = "menu-button"

	constructor({
		icon = new Icon({
			iconType: icons.hamburger,
			className: "menu-button__icon"
		}),
		menu
	}: {
		icon?: Icon
		menu: Menu
	}) {
		this.icon = icon
		this.menu = menu
		this.self = new PageControl(this.icon)
		this.self.addClass(MenuControl.className)
	}

	action() {
		this.icon.switchIcon(icons.cross)
		this.menu.list.self.classList.toggle("hide")
		this.menu.self.classList.toggle("hide")
	}
}
