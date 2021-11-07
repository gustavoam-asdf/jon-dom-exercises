import { SectionChild } from "../../section/SectionContent"
import Actor from "./Actor"
import "@styles/components/staging/Stage.css"

export default class Stage implements SectionChild {
  public self: HTMLDivElement
  static className = "stage"
  public actor: Actor

  constructor() {
    this.actor = new Actor()
    this.self = this.template()
  }

  private template() {
    const stage = document.createElement("div")
    stage.classList.add(Stage.className)
    stage.append(this.actor.self)
    return stage
  }

  public get limits() {
    return this.self.getBoundingClientRect()
  }

  public keyboardEvent(evt: KeyboardEvent): boolean {
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(evt.code))
      return false
    if (evt.code === "ArrowUp") {
      if (this.limits.top < this.actor.nextMove.up()) {
        evt.preventDefault()
        this.actor.move.up()
      } else this.actor.move.up(this.actor.limits.top - this.limits.top)
    } else if (evt.code === "ArrowDown") {
      if (this.limits.bottom > this.actor.nextMove.down()) {
        evt.preventDefault()
        this.actor.move.down()
      } else this.actor.move.down(this.limits.bottom - this.actor.limits.bottom)
    } else if (evt.code === "ArrowLeft") {
      this.limits.left < this.actor.nextMove.left()
        ? this.actor.move.left()
        : this.actor.move.left(this.actor.limits.left - this.limits.left)
    } else if (evt.code === "ArrowRight") {
      this.limits.right > this.actor.nextMove.right()
        ? this.actor.move.right()
        : this.actor.move.right(this.limits.right - this.actor.limits.right)
    }
    return true
  }
}
