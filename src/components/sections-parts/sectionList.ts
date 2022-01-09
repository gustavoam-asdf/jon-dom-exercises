import clockPart from "./clocks/clockPart"
import staging from "./staging/stagingPart"
import shortcuts from "./shortcuts/shortcutsPart"
import countdown from "./countdown/countdownPart"

const list: SectionPart[] = [
  {
    id: "clocks",
    title: "Relojes",
    href: "#clocks",
    content: clockPart
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
    id: "countdown",
    title: "Cuenta regresiva",
    href: "#countdown",
    content: countdown
  }
]

Object.freeze(list)

export default list
