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

  public keyboardEvent(evt: KeyboardEvent): boolean {
    evt.preventDefault()
    if (evt.code === "ArrowUp") {
      this.actor.move.up()
    } else if (evt.code === "ArrowDown") {
      this.actor.move.down()
    } else if (evt.code === "ArrowLeft") {
      this.actor.move.left()
    } else if (evt.code === "ArrowRight") {
      this.actor.move.right()
    }
    this.actor.updateDOMPosition()
    return true
  }
}
