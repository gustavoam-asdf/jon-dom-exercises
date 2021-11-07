import "@styles/components/staging/Actor.css"

interface Move {
  up(movement?: number): void
  down(movement?: number): void
  left(movement?: number): void
  right(movement?: number): void
}

export default class Actor {
  public self: HTMLDivElement
  private movementSpeed = 0.3
  public move: Move = {
    up: (movement: number = this.movementSpeed) => {
      this.self.getBoundingClientRect()
      this.positionY -= movement
    },
    down: (movement: number = this.movementSpeed) => {
      this.self.getBoundingClientRect()
      this.positionY += movement
    },
    left: (movement: number = this.movementSpeed) => {
      this.self.getBoundingClientRect()
      this.positionX -= movement
    },
    right: (movement: number = this.movementSpeed) => {
      this.self.getBoundingClientRect()
      this.positionX += movement
    }
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

  public updateDOMPosition() {
    this.self.setAttribute(
      "style",
      `transform: translate(${this.positionX * 100}%, ${this.positionY * 100}%)`
    )
  }
}
