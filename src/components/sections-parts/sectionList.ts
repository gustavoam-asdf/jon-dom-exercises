import clockSection from "./clocks/clockSectionPart"
import staging from "./staging/stagingPart"
import shortcuts from "./shortcuts/shortcutsPart"

const list = [
  {
    id: "clocks",
    title: "Relojes",
    href: "#clocks",
    content: clockSection
  },
  {
    id: "staging",
    title: "Escenario",
    href: "#staging",
    content: staging
  },
  {
    id: "shortcuts",
    title: "Atajos de teclado",
    href: "#shortcuts",
    content: shortcuts
  },
  {
    id: "section-4",
    title: "Sección 4",
    href: "#section-4"
  },
  {
    id: "section-5",
    title: "Sección 5",
    href: "#section-5"
  },
  {
    id: "section-6",
    title: "Sección 6",
    href: "#section-6"
  },
  {
    id: "section-7",
    title: "Sección 7",
    href: "#section-7"
  }
]

Object.freeze(list)

export default list
