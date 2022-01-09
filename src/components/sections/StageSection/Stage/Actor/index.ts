import "./styles.css"

export default class Actor {
  public self: HTMLDivElement
  static speed = 10
  public move: Move = {
    up: (displacement = Actor.speed) => {
      this.positionY -= displacement
      this.updateDOMPosition()
      return displacement
    },
    down: (displacement = Actor.speed) => {
      this.positionY += displacement
      this.updateDOMPosition()
      return displacement
    },
    left: (displacement = Actor.speed) => {
      this.positionX -= displacement
      this.updateDOMPosition()
      return displacement
    },
    right: (displacement = Actor.speed) => {
      this.positionX += displacement
      this.updateDOMPosition()
      return displacement
    }
  }

  public get limits() {
    return this.self.getBoundingClientRect()
  }

  public nextMove: Move = {
    up: (displacement = Actor.speed) => this.limits.top - displacement,
    down: (displacement = Actor.speed) => this.limits.bottom + displacement,
    left: (displacement = Actor.speed) => this.limits.left - displacement,
    right: (displacement = Actor.speed) => this.limits.right + displacement
  }

  static className = "actor"

  public positionX = 0
  public positionY = 0

  constructor() {
    this.self = this.template()
  }

  private template() {
    const actor = document.createElement("div")
    actor.classList.add(Actor.className)
    return actor
  }

  private updateDOMPosition() {
    this.self.setAttribute(
      "style",
      `transform: translate(${this.positionX}px, ${this.positionY}px)`
    )
  }
}
