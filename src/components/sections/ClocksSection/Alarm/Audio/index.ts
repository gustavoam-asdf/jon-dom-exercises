export default class Audio {
  public self: HTMLAudioElement
  public src: string
  public isRinging: boolean

  constructor({ src }: { src: string }) {
    this.src = src
    this.self = this.template()
    this.isRinging = false
  }

  private template(): HTMLAudioElement {
    const audio = document.createElement("audio")
    audio.setAttribute("src", this.src)
    audio.setAttribute("loop", "")
    audio.volume = 0.4
    audio.innerHTML =
      "Your browser does not support the <code>audio</code> element."
    return audio
  }

  public play(): void {
    this.self.play()
    this.isRinging = true
  }

  public pause(): void {
    this.self.pause()
    this.isRinging = false
  }
}
