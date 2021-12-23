import { SectionChild } from "../../section/SectionContent"
import DatetimeTarget from "./DatetimeTarget"
import "@styles/components/countdown/Countdown.css"

function updater(dtTarget: DatetimeTarget): NodeJS.Timer {
  return setInterval(() => {
    const {
      value: {
        difference: { years, months, days, hours, minutes, seconds },
        remaining
      }
    } = dtTarget
    console.log(`${remaining ? "Faltan" : "Hace"}:
    ${years} años
    ${months} meses
    ${days} días
    ${hours} horas
    ${minutes} minutos
    ${seconds} segundos
    `)
  }, 1000)
}

export default class Countdown implements SectionChild {
  public self: HTMLDivElement
  public dateTarget: DatetimeTarget
  public updater?: NodeJS.Timer
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

    if (!this.dateTarget.usable) return true

    if (this.updater) clearInterval(this.updater)

    this.updater = updater(this.dateTarget)
    console.log("Esta habilitado")

    return true
  }

  private template() {
    const countdown = document.createElement("div")
    countdown.classList.add(Countdown.className)
    countdown.appendChild(this.dateTarget.self)
    return countdown
  }
}
