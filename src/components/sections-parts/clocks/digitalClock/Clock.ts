interface Time {
  hours: string
  minutes: string
  seconds: string
  separator: string
}

const clockParts = (time: string): Time => {
  if (time.length !== 8) {
    throw new Error("Invalid time format")
  }
  const [hours, minutes, seconds] = time.split(":")
  return {
    hours: `<span class="${Clock.className}-part hours">${hours}</span>`,
    minutes: `<span class="${Clock.className}-part minutes">${minutes}</span>`,
    seconds: `<span class="${Clock.className}-part seconds">${seconds}</span>`,
    separator: `<span class="${Clock.className}-part separator">:</span>`
  }
}

const ClockTemplate = ({
  hours,
  minutes,
  seconds,
  separator
}: Time): HTMLDivElement => {
  const clock: HTMLDivElement = document.createElement("div")
  clock.classList.add(Clock.className)
  clock.classList.add("hide")
  clock.innerHTML = `${hours}${separator}${minutes}${separator}${seconds}`
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
