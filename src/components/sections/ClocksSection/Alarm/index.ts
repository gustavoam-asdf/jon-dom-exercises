import alarm from "/assets/audio/alarm.mp3"
import Audio from "./Audio"
import AudioController from "./AudioController"
import "./styles.css"

export default class Alarm implements SectionChild {
  public self: HTMLElement
  public controller: AudioController
  public audio: Audio = new Audio({ src: alarm })
  static className = "digital-alarm"

  constructor() {
    this.controller = new AudioController({
      audio: this.audio,
      text: "Iniciar alarma"
    })
    this.self = this.template()
  }

  public clickEvent(evt: any) {
    const clickOnButton = evt.target.matches(`.${AudioController.className}`)
    if (!clickOnButton) return false
    if (this.audio.isRinging) {
      this.audio.pause()
      this.controller.changeText("Iniciar alarma")
    } else {
      this.audio.play()
      this.controller.changeText("Detener alarma")
    }
    return true
  }

  private template(): HTMLElement {
    const digitalAlarm = document.createElement("div")
    digitalAlarm.classList.add(Alarm.className)
    const alarm = document.createElement("figure")
    alarm.append(this.audio.self)

    digitalAlarm.append(alarm)
    digitalAlarm.append(this.controller.self)

    return digitalAlarm
  }
}
