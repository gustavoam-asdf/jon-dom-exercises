import { SectionChild } from "../../section/SectionContent"
import DatetimeTarget from "./DatetimeTarget"
import "@styles/components/countdown/Countdown.css"

export default class Countdown implements SectionChild {
  public self: HTMLDivElement
  public dateTarget: DatetimeTarget
  static className = "countdown"

  constructor() {
    this.dateTarget = new DatetimeTarget()
    this.self = this.template()
  }

  public changeEvent(evt: Event) {
    if (
      !(
        this.dateTarget.dateBox.date === evt.target ||
        this.dateTarget.timeBox.time === evt.target
      )
    )
      return false
    console.log("Se ejecuta")
    return true
  }

  private template() {
    const countdown = document.createElement("div")
    countdown.classList.add(Countdown.className)
    countdown.appendChild(this.dateTarget.self)
    return countdown
  }
}
