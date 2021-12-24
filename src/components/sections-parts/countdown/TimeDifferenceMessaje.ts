import moment, { Moment } from "moment"
import { $ } from "../../../utils/selector"
import { DatetimeData, timeDifference } from "./DatetimeTarget"

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
    const newDiff = timeDifference(moment(), moment(this.dtTarget))
    if (this.dtDifference.remaining !== newDiff.remaining) {
      $(this.self, ".remaining").innerHTML = newDiff.remaining
        ? "Faltan: "
        : "Pasaron: "
    }
    if (this.dtDifference.years !== newDiff.years) {
      $(this.self, ".years").innerHTML = `${newDiff.years} años`
    }
    if (this.dtDifference.months !== newDiff.months) {
      $(this.self, ".months").innerHTML = `${newDiff.months} meses`
    }
    if (this.dtDifference.days !== newDiff.days) {
      $(this.self, ".days").innerHTML = `${newDiff.days} días`
    }
    if (this.dtDifference.hours !== newDiff.hours) {
      $(this.self, ".hours").innerHTML = `${newDiff.hours} horas`
    }
    if (this.dtDifference.minutes !== newDiff.minutes) {
      $(this.self, ".minutes").innerHTML = `${newDiff.minutes} minutos`
    }
    if (this.dtDifference.seconds !== newDiff.seconds) {
      $(this.self, ".seconds").innerHTML = `${newDiff.seconds} segundos`
    }
    this.dtDifference = newDiff
  }

  private template(dtDifference: DatetimeData) {
    const differenceMessage = document.createElement("p")
    differenceMessage.classList.add(TimeDifferenceMessage.className)

    differenceMessage.innerHTML = `
      ${this.printPart(
        "remaining",
        dtDifference.remaining ? "Faltan: " : "Pasaron: "
      )}
      ${this.printPart("years", `${dtDifference.years} años`)}
      ${this.printPart("months", `${dtDifference.months} meses`)} 
      ${this.printPart("days", `${dtDifference.days} días`)} 
      ${this.printPart("hours", `${dtDifference.hours} horas`)} 
      ${this.printPart("minutes", `${dtDifference.minutes} minutos`)} 
      ${this.printPart("seconds", `${dtDifference.seconds} segundos`)} 
    `
    return differenceMessage
  }

  private printPart(className: string, value: string): string {
    return `<span class="${TimeDifferenceMessage.classPart} ${className}">${value}</span>`
  }
}
