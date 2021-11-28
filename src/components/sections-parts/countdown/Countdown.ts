import { SectionChild } from "../../section/SectionContent"
import DateTarget from "./DateTarget"

export default class Countdown implements SectionChild {
  public self: HTMLDivElement
  public dateTarget: DateTarget
  static className = "countdown"

  constructor() {
    this.dateTarget = new DateTarget()
    this.self = this.template()
  }

  private template() {
    const countdown = document.createElement("div")
    countdown.classList.add(Countdown.className)

    countdown.appendChild(this.dateTarget.self)

    return countdown
  }
}
