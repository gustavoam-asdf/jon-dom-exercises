import DatetimeTarget from "./DatetimeTarget"
import "@styles/components/countdown/Countdown.css"
import TimeDifferenceMessage from "./TimeDifferenceMessaje"
import moment from "moment"

function updater(tdMessage: TimeDifferenceMessage): NodeJS.Timer {
  return setInterval(() => {
    tdMessage.update()
  }, 1000)
}

export default class Countdown implements SectionChild {
  public self: HTMLDivElement
  public dateTarget: DatetimeTarget
  public message: TimeDifferenceMessage
  public updater?: NodeJS.Timer
  static className = "countdown"

  constructor() {
    this.dateTarget = new DatetimeTarget()
    this.message = new TimeDifferenceMessage(moment())
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
    if (!this.dateTarget.usable) return true
    if (this.updater) clearInterval(this.updater)
    this.message.dtTarget = this.dateTarget.value
    this.message.update()
    this.updater = updater(this.message)
    return true
  }

  private template() {
    const countdown = document.createElement("div")
    countdown.classList.add(Countdown.className)
    countdown.appendChild(this.dateTarget.self)
    countdown.appendChild(this.message.self)
    this.message.update()
    return countdown
  }
}
