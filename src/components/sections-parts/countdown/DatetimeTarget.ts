import DateTarget from "./DateTarget"
import TimeTarget from "./TimeTarget"
import moment from "moment"

export default class DatetimeTarget {
  public self: HTMLDivElement
  public dateBox: DateTarget
  public timeBox: TimeTarget
  static className = "date-target"
  static inputId = "dateTarget"

  constructor() {
    this.dateBox = new DateTarget()
    this.timeBox = new TimeTarget()
    this.self = this.template()
  }

  get usable() {
    return this.dateBox.usable && this.timeBox.usable
  }

  get value() {
    if (!this.usable) throw new Error("DatetimeTarget is not usable")
    const now = moment()
    const target = moment(
      this.dateBox?.value?.split("/").reverse().join("-") +
        " " +
        this.timeBox?.value
    )

    const diff =
      target > now
        ? moment.duration(target.diff(now))
        : moment.duration(now.diff(target))

    return {
      remaining: target > now,
      difference: {
        years: diff.years(),
        months: diff.months(),
        days: diff.days(),
        hours: diff.hours(),
        minutes: diff.minutes(),
        seconds: diff.seconds()
      }
    }
  }

  private template() {
    const datetimeTarget = document.createElement("div")
    datetimeTarget.classList.add(DatetimeTarget.className)

    datetimeTarget.appendChild(this.dateBox.self)
    datetimeTarget.appendChild(this.timeBox.self)

    return datetimeTarget
  }
}
