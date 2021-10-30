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

  const updater: NodeJS.Timer = setInterval(() => {
    clock.update()
  }, 1000)

  return section
}

export default class DigitalClock {
  public self: HTMLDivElement
  public controller: ClockController
  public clock: Clock
  static className = "digital-clock"

  constructor() {
    this.controller = new ClockController({
      text: "Iniciar reloj"
    })
    this.controller.self.addEventListener("click", () => this.clickEvent())
    this.clock = new Clock()
    this.self = DigitalClockTemplate({
      controller: this.controller,
      clock: this.clock
    })
  }

  clickEvent() {
    if (this.clock.isShown) {
      this.controller.changeText("Detener reloj")
      this.clock.hide()
    } else {
      this.controller.changeText("Iniciar reloj")
      this.clock.show()
    }
  }
}
