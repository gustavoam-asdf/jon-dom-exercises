import { SectionChild } from "../../section/SectionContent"
import Actor from "./Actor"
import "@styles/components/staging/Stage.css"

export default class Stage implements SectionChild {
  public self: HTMLDivElement
  static className = "stage"
  public actor: Actor
  clickEvent?: (evt: any) => boolean

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
}
