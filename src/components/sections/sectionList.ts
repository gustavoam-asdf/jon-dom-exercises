import ClocksSection from "./ClocksSection"
import StagingSection from "./StageSection"
import ShortcutsSection from "./ShortcutsSection"
import CountdownSection from "./CountdownSection"
import AssetsSection from "./AssetsSection"
import NestedWebSection from "./ResponsiveTesterSection"
import UserDataSection from "./UserDataSection"

const list: SectionPart[] = [
	{
		id: "clocks",
		title: "Relojes",
		href: "#clocks",
		content: ClocksSection
	},
	{
		id: "staging",
		title: "Escenario",
		href: "#staging",
		content: StagingSection
	},
	{
		id: "shortcuts",
		title: "Atajos de teclado",
		href: "#shortcuts",
		content: ShortcutsSection
	},
	{
		id: "countdown",
		title: "Cuenta regresiva",
		href: "#countdown",
		content: CountdownSection
	},
	{
		id: "assets",
		title: "Recursos",
		href: "#assets",
		content: AssetsSection
	},
	{
		id: "responsive-tester",
		title: "Responsive tester",
		href: "#responsive-tester",
		content: NestedWebSection
	},
	{
		id: "user-data",
		title: "Datos del usuario",
		href: "#user-data",
		content: UserDataSection
	}
]

Object.freeze(list)

export default list
