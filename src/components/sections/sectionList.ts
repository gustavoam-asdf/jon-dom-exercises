import ClocksSection from "./ClocksSection"
import StagingSection from "./StageSection"
import ShortcutsSection from "./ShortcutsSection"
import CountdownSection from "./CountdownSection"
import AssetsSection from "./AssetsSection"

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
  }
]

Object.freeze(list)

export default list
