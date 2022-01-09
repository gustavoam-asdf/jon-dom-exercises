import Clock from "./Clock"
import Button from "@components/Button"

export default class ClockController {
  public self: Button
  static className = "clock-controller"

  constructor({ text }: { text: string }) {
    this.self = new Button({
      className: ClockController.className,
      innerHTML: text
    })
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
