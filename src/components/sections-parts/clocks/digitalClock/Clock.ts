interface Time {
  hours: string
  minutes: string
  seconds: string
}

const clockParts = (time: string): Time => {
  if (time.length !== 8) {
    throw new Error('Invalid time format')
  }
  let [hours, minutes, seconds] = time.split(':')
  return { hours, minutes, seconds }
}

const printTime = ({ hours, minutes, seconds }: Time) => `
  <span class="${Clock.className}-part hour">${hours}</span>
  <span class="${Clock.className}-part separator" >:</span>
  <span class="${Clock.className}-part minute">${minutes}</span>
  <span class="${Clock.className}-part separator">:</span>
  <span class="${Clock.className}-part second">${seconds}</span>
`

const ClockTemplate = (): HTMLDivElement => {
  const clock: HTMLDivElement = document.createElement('div')
  clock.classList.add(Clock.className)
  const parts = clockParts(new Date().toLocaleTimeString())
  clock.innerHTML = printTime(parts)
  return clock
}

export default class Clock {
  public self: HTMLDivElement
  static className: string = 'clock'

  constructor() {
    this.self = ClockTemplate()
  }

  update() {
    const parts = clockParts(new Date().toLocaleTimeString())
    this.self.innerHTML = printTime(parts)
  }
}
