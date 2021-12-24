import DateTarget from "./DateTarget"
import TimeTarget from "./TimeTarget"
import moment, { Moment } from "moment"
export interface DatetimeData {
  remaining: boolean
  years: number
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

export const timeDifference = (
  timeOrigin: Moment,
  timeTarget: Moment
): DatetimeData => {
  const diff =
    timeTarget > timeOrigin
      ? moment.duration(timeTarget.diff(timeOrigin))
      : moment.duration(timeOrigin.diff(timeTarget))

  return {
    remaining: timeTarget > timeOrigin,
    years: diff.years(),
    months: diff.months(),
    days: diff.days(),
    hours: diff.hours(),
    minutes: diff.minutes(),
    seconds: diff.seconds()
  }
}
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

  get value(): Moment {
    if (!this.usable) throw new Error("DatetimeTarget is not usable")
    return moment(
      this.dateBox?.value?.split("/").reverse().join("-") +
        " " +
        this.timeBox?.value
    )
  }

  private template() {
    const datetimeTarget = document.createElement("div")
    datetimeTarget.classList.add(DatetimeTarget.className)

    datetimeTarget.appendChild(this.dateBox.self)
    datetimeTarget.appendChild(this.timeBox.self)

    return datetimeTarget
  }
}
