export default class Audio {
  public self: HTMLAudioElement
  public src: string

  constructor({ src }: { src: string }) {
    this.src = src
    this.self = this.template()
  }

  private template(): HTMLAudioElement {
    const audio = document.createElement("audio")
    audio.src = this.src
    audio.loop = true
    audio.autoplay = true
    audio.volume = 0.1
    return audio
  }
}
