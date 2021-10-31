interface Time {
  hours: string
  minutes: string
  seconds: string
  separator: string
  format?: string
}

const clockParts = (localTime: string): Time => {
  let usedTime = localTime
  let currFormat = ""
  const hour12: boolean = /(a|p)m/i.test(localTime)
  if (hour12) {
    const [time, format] = localTime.split(/\s/i)
    usedTime = time
    currFormat = format
  }
  const [hours, minutes, seconds] = usedTime.split(":")
  const time: Time = {
    hours: `<span class="${Clock.className}-part hours">${hours}</span>`,
    minutes: `<span class="${Clock.className}-part minutes">${minutes}</span>`,
    seconds: `<span class="${Clock.className}-part seconds">${seconds}</span>`,
    separator: `<span class="${Clock.className}-part separator">:</span>`
  }
  if (hour12) {
    time.format = `<span class="${Clock.className}-part format">${currFormat}</span>`
  }
  return time
}

const ClockTemplate = ({
  hours,
  minutes,
  seconds,
  separator,
  format
}: Time): HTMLDivElement => {
  const clock: HTMLDivElement = document.createElement("div")
  clock.classList.add(Clock.className)
  clock.classList.add("hide")
  clock.innerHTML = `${hours}${separator}${minutes}${separator}${seconds}${
    format ? format : ""
  }`
  return clock
}

export default class Clock {
  public self: HTMLDivElement
  public currTime: Time
  public isShown: boolean
  static className = "clock"

  constructor() {
    this.isShown = false
    this.currTime = clockParts(new Date().toLocaleTimeString())
    this.self = ClockTemplate(this.currTime)
  }

  update() {
    const newTime = clockParts(new Date().toLocaleTimeString())
    const $ = (selector: string) => this.self.querySelector(selector)
    if (newTime.hours !== this.currTime.hours) {
      $(`.${Clock.className}-part.hours`)!.outerHTML = newTime.hours
    }
    if (newTime.minutes !== this.currTime.minutes) {
      $(`.${Clock.className}-part.minutes`)!.outerHTML = newTime.minutes
    }
    if (newTime.seconds !== this.currTime.seconds) {
      $(`.${Clock.className}-part.seconds`)!.outerHTML = newTime.seconds
    }
    this.currTime = newTime
  }

  show() {
    this.self.classList.remove("hide")
    this.isShown = true
  }

  hide() {
    this.self.classList.add("hide")
    this.isShown = false
  }
}
