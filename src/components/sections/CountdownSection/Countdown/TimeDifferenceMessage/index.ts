import moment, { Moment } from "moment"
import { $ } from "@utils/selector"
import timeDifference from "@utils/timeDifference"
import { completeTwoDigits } from "@utils/completeTwoDigits"

export default class TimeDifferenceMessage {
  public self: HTMLParagraphElement
  public dtTarget: Moment
  public dtDifference: DatetimeData
  static className = "time-diff-message"
  static classPart = "diff-message-part"

  constructor(dtTarget: Moment) {
    this.dtTarget = dtTarget
    this.dtDifference = timeDifference(moment(), dtTarget)
    this.self = this.template(this.dtDifference)
  }

  public update(): void {
    const currDiff = this.dtDifference as NativeObject
    const newDiff = timeDifference(
      moment(),
      moment(this.dtTarget)
    ) as NativeObject

    const parts = this.messageParts(newDiff as DatetimeData)

    Object.keys(parts).forEach(partKey => {
      if (currDiff[partKey] !== newDiff[partKey]) {
        $(this.self, `.${partKey}`).textContent = parts[partKey]
      }
    })

    this.dtDifference = newDiff as DatetimeData
  }

  private template(dtDifference: DatetimeData) {
    const differenceMessage = document.createElement("p")
    differenceMessage.classList.add(TimeDifferenceMessage.className)
    const parts = this.messageParts(dtDifference)

    differenceMessage.innerHTML = Object.keys(parts)
      .map(partKey => this.printPart(partKey, parts[partKey]))
      .join("")

    return differenceMessage
  }

  private messageParts(dtDifference: DatetimeData): NativeObject {
    return {
      remaining: dtDifference.remaining ? "Faltan: " : "Pasaron: ",
      years: `${completeTwoDigits(dtDifference.years)} años`,
      months: `${completeTwoDigits(dtDifference.months)} meses`,
      days: `${completeTwoDigits(dtDifference.days)} días`,
      hours: `${completeTwoDigits(dtDifference.hours)} horas`,
      minutes: `${completeTwoDigits(dtDifference.minutes)} minutos`,
      seconds: `${completeTwoDigits(dtDifference.seconds)} segundos`
    }
  }

  private printPart(className: string, value: string): string {
    return `<span class="${TimeDifferenceMessage.classPart} ${className}">${value}</span>`
  }
}
