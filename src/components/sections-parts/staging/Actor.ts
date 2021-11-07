import "@styles/components/staging/Actor.css"

export default class Actor {
  public self: HTMLDivElement
  static className = "actor"

  private movementSpeed = 0.2
  public positionX = 0
  public positionY = 0

  constructor() {
    this.self = this.template()
    setInterval(() => {
      // this.moveUp()
      this.moveRight()
      this.moveDown()
      // this.moveLeft()
      this.updateDOMPosition()
    }, 2000)
  }

  private template() {
    const actor = document.createElement("div")
    actor.classList.add(Actor.className)
    return actor
  }

  private updateDOMPosition() {
    this.self.setAttribute(
      "style",
      `transform: translate(${this.positionX * 100}%, ${this.positionY * 100}%)`
    )
  }

  public moveRight() {
    this.positionX = this.positionX + this.movementSpeed
  }

  public moveLeft() {
    this.positionX = this.positionX - this.movementSpeed
  }

  public moveDown() {
    this.positionY = this.positionY + this.movementSpeed
  }

  public moveUp() {
    this.positionY = this.positionY - this.movementSpeed
  }
}
