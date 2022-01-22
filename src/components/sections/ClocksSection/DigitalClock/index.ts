import executeClick from "@utils/executeClick"
import Clock from "./Clock"
import ClockController from "./ClockController"
import "./styles.css"

const DigitalClockTemplate = ({
  controller,
  clock
}: {
  controller: ClockController
  clock: Clock
}): HTMLDivElement => {
  const digitalClock: HTMLDivElement = document.createElement("div")
  digitalClock.classList.add(DigitalClock.className)

  digitalClock.appendChild(controller.self)
  digitalClock.appendChild(clock.self)

  return digitalClock
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
    return executeClick({
      evt,
      selectors: `.${ClockController.className}`,
      action: () => {
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
      }
    })
  }
}
