import Clock from "./Clock"

const ClockControllerTemplate = ({
  text
}: {
  text: string
}): HTMLButtonElement => {
  const section: HTMLButtonElement = document.createElement("button")
  section.classList.add(ClockController.className)
  section.innerHTML = text
  return section
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
