import Audio from "./Audio"
import "@styles/components/Button.css"

export default class AudioController {
  public self: HTMLButtonElement
  public audio: Audio
  static className = "alarm-controller"

  constructor({ audio, text }: { audio: Audio; text?: string }) {
    this.audio = audio
    this.self = this.template({ text })
  }

  private template({ text = "Start" }: { text?: string }): HTMLButtonElement {
    const button = document.createElement("button")
    button.classList.add(AudioController.className)
    button.classList.add("button")
    button.innerHTML = text
    return button
  }

  changeText(text: string) {
    this.self.innerHTML = text
  }
}
