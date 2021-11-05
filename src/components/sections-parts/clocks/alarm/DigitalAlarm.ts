import alarm from "@assets/audio/alarm.mp3"
import Audio from "./Audio"

export default class DigitalAlarm {
  public self: HTMLElement
  // public controller: AudioController
  public audio: Audio = new Audio({ src: alarm })

  constructor() {
    this.self = this.template()
  }

  private template(): HTMLElement {
    const alarm = document.createElement("figure")
    alarm.append(this.audio.self)

    return alarm
  }
}
