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

  private template() {
    const countdown = document.createElement("div")
    countdown.classList.add(Countdown.className)
    countdown.appendChild(this.dateTarget.self)
    // setInterval(() => {
    //   console.log(this.dateTarget.value.toLocaleString())
    //   console.log(this.dateTarget.value.getTime())
    //   console.log("")
    // }, 2000)

    return countdown
  }
}
