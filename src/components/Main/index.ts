import Section from "@components/Section"
import list from "@components/sections/sectionList"
import "./styles.css"

const sectionsList: Section[] = list.map(
	({ id, title, content }) => new Section({ id, title, content })
)

const MainTemplate = ({
	sectionsList
}: {
	sectionsList: Section[]
}): HTMLElement => {
	const main = document.createElement("main")
	main.classList.add(Main.className)
	const fragment: DocumentFragment = document.createDocumentFragment()
	sectionsList.forEach(section => fragment.appendChild(section.self))
	main.appendChild(fragment)
	return main
}

export default class Main {
	public self: HTMLElement
	public sectionsList: Section[]
	static className = "main"

	constructor() {
		this.sectionsList = sectionsList
		this.self = MainTemplate({ sectionsList })
	}
}
