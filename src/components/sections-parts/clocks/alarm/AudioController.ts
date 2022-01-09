import Audio from "./Audio"
import Button from "@components/Button"

export default class AudioController {
  public self: Button
  public audio: Audio
  static className = "alarm-controller"

  constructor({ audio, text }: { audio: Audio; text?: string }) {
    this.audio = audio
    this.self = new Button({
      className: AudioController.className,
      innerHTML: text
    })
  }

  changeText(text: string) {
    this.self.innerHTML = text
  }
}
