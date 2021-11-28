import { SectionChild } from "../../section/SectionContent"
import DateTarget from "./DateTarget"

export default class Countdown implements SectionChild {
  self: HTMLDivElement
  static className = "countdown"

  constructor() {
    this.self = this.template()
  }

  private template() {
    const countdown = document.createElement("div")
    countdown.classList.add(Countdown.className)

    const dateTarget = new DateTarget()
    countdown.appendChild(dateTarget.self)

    return countdown
  }
}
