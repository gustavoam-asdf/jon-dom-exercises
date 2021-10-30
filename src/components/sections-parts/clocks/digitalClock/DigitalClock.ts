import Clock from './Clock'
import ClockController from './ClockController'

const DigitalClockTemplate = (): HTMLDivElement => {
  const section: HTMLDivElement = document.createElement('div')
  section.classList.add(DigitalClock.className)

  const controller: ClockController = new ClockController({
    text: 'Iniciar reloj'
  })
  const clock: Clock = new Clock({})
  section.appendChild(controller.self)
  section.appendChild(clock.self)
  setInterval(() => {
    clock.update()
  }, 1000)
  return section
}

export default class DigitalClock {
  public self: HTMLDivElement
  static className: string = 'digital-clock'

  constructor() {
    this.self = DigitalClockTemplate()
  }
}
