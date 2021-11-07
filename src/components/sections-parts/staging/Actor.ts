export default class Actor {
  public self: HTMLDivElement
  static className = "actor"

  constructor() {
    this.self = this.template()
  }

  private template() {
    const actor = document.createElement("div")
    actor.classList.add(Actor.className)
    return actor
  }
}
