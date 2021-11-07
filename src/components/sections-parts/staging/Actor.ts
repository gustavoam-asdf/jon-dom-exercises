import "@styles/components/staging/Actor.css"

interface Move {
  up(movement?: number): number
  down(movement?: number): number
  left(movement?: number): number
  right(movement?: number): number
}

export default class Actor {
  public self: HTMLDivElement
  static speed = 10
  public move: Move = {
    up: (movement: number = Actor.speed) => {
      this.positionY -= movement
      this.updateDOMPosition()
      return movement
    },
    down: (movement: number = Actor.speed) => {
      this.positionY += movement
      this.updateDOMPosition()
      return movement
    },
    left: (movement: number = Actor.speed) => {
      this.positionX -= movement
      this.updateDOMPosition()
      return movement
    },
    right: (movement: number = Actor.speed) => {
      this.positionX += movement
      this.updateDOMPosition()
      return movement
    }
  }

  public get limits() {
    return this.self.getBoundingClientRect()
  }

  public nextMove: Move = {
    up: (movement: number = Actor.speed) => this.limits.top - movement,
    down: (movement: number = Actor.speed) => this.limits.bottom + movement,
    left: (movement: number = Actor.speed) => this.limits.left - movement,
    right: (movement: number = Actor.speed) => this.limits.right + movement
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
