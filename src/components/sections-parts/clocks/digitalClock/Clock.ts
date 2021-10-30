interface Time {
  hours: string
  minutes: string
  seconds: string
  separator: string
}

const clockParts = (time: string): Time => {
  if (time.length !== 8) {
    throw new Error('Invalid time format')
  }
  let [hours, minutes, seconds] = time.split(':')
  return {
    hours: `<span class="${Clock.className}-part hours">${hours}</span>`,
    minutes: `<span class="${Clock.className}-part minutes">${minutes}</span>`,
    seconds: `<span class="${Clock.className}-part seconds">${seconds}</span>`,
    separator: `<span class="${Clock.className}-part separator">:</span>`
  }
}

const printHour = (hours: string): string => `
  <span class="${Clock.className}-part hour">${hours}</span>
`

const printMinutes = (minutes: string): string => `
  <span class="${Clock.className}-part minutes">${minutes}</span>
`

const printSeconds = (seconds: string): string => `
  <span class="${Clock.className}-part seconds">${seconds}</span>
`

const ClockTemplate = ({
  hours,
  minutes,
  seconds,
  separator
}: Time): HTMLDivElement => {
  const clock: HTMLDivElement = document.createElement('div')
  clock.classList.add(Clock.className)
  clock.innerHTML = `${hours} ${separator} ${minutes} ${separator} ${seconds}`
  return clock
}

export default class Clock {
  public self: HTMLDivElement
  public currTime: Time
  static className: string = 'clock'

  constructor() {
    this.currTime = clockParts(new Date().toLocaleTimeString())
    this.self = ClockTemplate(this.currTime)
  }

  update() {
    const newTime = clockParts(new Date().toLocaleTimeString())
    if (newTime.hours !== this.currTime.hours) {
      this.self.querySelector(`.${Clock.className}-part.hours`)!.outerHTML =
        newTime.hours
    }
    if (newTime.minutes !== this.currTime.minutes) {
      this.self.querySelector(`.${Clock.className}-part.minutes`)!.outerHTML =
        newTime.minutes
    }
    if (newTime.seconds !== this.currTime.seconds) {
      this.self.querySelector(`.${Clock.className}-part.seconds`)!.outerHTML =
        newTime.seconds
    }
  }
}
