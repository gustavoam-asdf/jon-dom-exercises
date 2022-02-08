import { $ } from "@utils/selector"

export default class UserData implements SectionChild {
	public self: HTMLDivElement
	static className = "user-data"

	constructor() {
		this.self = this.#template()
		setTimeout(() => {
			$(document.documentElement, "[href='#user-data']").click()
		}, 1000)
	}

	#template() {
		const userData = document.createElement("div")
		userData.classList.add(UserData.className)

		userData.innerHTML = `
    `

		return userData
	}
}
