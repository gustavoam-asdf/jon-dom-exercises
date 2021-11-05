import Clock from "./Clock"
import "../../../styles/Button.css"

const ClockControllerTemplate = ({
  text
}: {
  text: string
}): HTMLButtonElement => {
  const controller: HTMLButtonElement = document.createElement("button")
  controller.classList.add(ClockController.className)
  controller.classList.add("button")
  controller.innerHTML = text
  return controller
}

export default class ClockController {
  public self: HTMLButtonElement
  static className = "clock-controller"

  constructor({ text }: { text: string }) {
    this.self = ClockControllerTemplate({ text })
  }

  changeText(text: string) {
    this.self.innerHTML = text
  }

  static updater({ clock }: { clock: Clock }): NodeJS.Timer {
    return setInterval(() => {
      clock.update()
    }, 1000)
  }
}
