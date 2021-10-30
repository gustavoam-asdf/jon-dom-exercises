const ClockTemplate = ({ date }: { date: Date }): HTMLDivElement => {
  const clock: HTMLDivElement = document.createElement('div')
  clock.classList.add(Clock.className)
  clock.innerHTML = date.toLocaleTimeString()
  return clock
}

export default class Clock {
  public self: HTMLDivElement
  static className: string = 'clock'

  constructor({ date = new Date() }: { date?: Date }) {
    this.self = ClockTemplate({ date })
  }

  update() {
    this.self.innerHTML = new Date().toLocaleTimeString()
  }
}
