import MenuControl from "./MenuControl"
import Menu from "./Menu"
import MenuList from "./Menu/MenuList"
import "./styles.css"
import ScrollControl from "./ScrollControl"
import executeClick from "@utils/executeClick"
import ThemeControl from "./ThemeControl"

export default class Panel {
	public self: HTMLDivElement
	public menu: Menu
	public menuControl: MenuControl
	public scrollControl: ScrollControl
	public themeControl: ThemeControl
	static className = "panel"

	constructor() {
		this.menu = new Menu()
		this.menuControl = new MenuControl({ menu: this.menu })
		this.scrollControl = new ScrollControl()
		this.themeControl = new ThemeControl()
		this.self = this.#template()
	}

	#template = (): HTMLDivElement => {
		const panel: HTMLDivElement = document.createElement("div")
		panel.classList.add(Panel.className)
		panel.append(this.menu.self)
		panel.append(this.menuControl.self)
		panel.append(this.scrollControl.self)
		panel.append(this.themeControl.self)
		return panel
	}

	clickEvent(evt: any): boolean {
		const clickOnMenuControl = executeClick({
			evt,
			selectors: `.${MenuControl.className}`,
			deep: true,
			action: this.menuControl.action.bind(this.menuControl)
		})
		if (clickOnMenuControl) return true

		const clickOnScrollControl = executeClick({
			evt,
			selectors: `.${ScrollControl.className}`,
			deep: true,
			action: () => this.scrollControl.action()
		})
		if (clickOnScrollControl) return true

		const clickOnThemeControl = executeClick({
			evt,
			selectors: `.${ThemeControl.className}`,
			deep: true,
			action: () => this.themeControl.action()
		})
		if (clickOnThemeControl) return true

		const clickOnMenuItem = executeClick({
			evt,
			selectors: `.${MenuList.className} *`,
			action: () => {
				this.menuControl.action()
				this.menu.action()
			}
		})
		if (clickOnMenuItem) return true

		return false
	}
}
