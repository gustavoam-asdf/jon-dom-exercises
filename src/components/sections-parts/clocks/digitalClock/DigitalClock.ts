import { SectionChild } from "../../../section/SectionContent"
import Clock from "./Clock"
import ClockController from "./ClockController"
import "./styles/DigitalClock"

const DigitalClockTemplate = ({
  controller,
  clock
}: {
  controller: ClockController
  clock: Clock
}): HTMLDivElement => {
  const section: HTMLDivElement = document.createElement("div")
  section.classList.add(DigitalClock.className)

  section.appendChild(controller.self)
  section.appendChild(clock.self)

  return section
}

export default class DigitalClock implements SectionChild {
  public self: HTMLDivElement
  public controller: ClockController
  public clock: Clock
  private updater?: NodeJS.Timer
  static className = "digital-clock"

  constructor() {
    this.clock = new Clock()
    this.controller = new ClockController({
      text: "Iniciar reloj"
    })
    this.self = DigitalClockTemplate({
      controller: this.controller,
      clock: this.clock
    })
  }

  clickEvent(evt: any): boolean {
    const clickOnButton = evt.target.matches(`.${ClockController.className}`)
    if (clickOnButton) {
      if (this.clock.isShown) {
        this.controller.changeText("Iniciar reloj")
        this.updater ? clearInterval(this.updater) : 0
        this.clock.hide()
      } else {
        this.controller.changeText("Detener reloj")
        this.clock.update()
        this.updater = ClockController.updater({ clock: this.clock })
        this.clock.show()
      }
      return true
    }
    return false
  }
}
