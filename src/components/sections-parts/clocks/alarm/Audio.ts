export default class Audio {
  public self: HTMLAudioElement
  public src: string

  constructor({ src }: { src: string }) {
    this.src = src
    this.self = this.template()
  }

  private template(): HTMLAudioElement {
    const audio = document.createElement("audio")
    audio.setAttribute("src", this.src)
    audio.setAttribute("loop", "")
    audio.volume = 0.4
    audio.controls = true
    audio.innerHTML =
      "Your browser does not support the <code>audio</code> element."
    return audio
  }
}
