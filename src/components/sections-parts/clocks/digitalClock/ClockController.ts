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

  constructor({ text = "Push me" }: { text?: string }) {
    this.self = ClockControllerTemplate({ text })
  }
}
