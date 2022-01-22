import Button from "@components/Button"
import { $ } from "@utils/selector"

export default class ResponsiveTester implements SectionChild {
  public self: HTMLDivElement
  static className = "responsive-tester"

  constructor() {
    this.self = this.template()
    setTimeout(() => {
      $(document.documentElement, '[href="#responsive-tester"]').click()
    }, 1000)
  }

  private template() {
    const nestedWeb = document.createElement("div")
    nestedWeb.classList.add(ResponsiveTester.className)

    nestedWeb.innerHTML = `
      <form name="form">
        <label>
          <span>Url:</span>
          <input 
            type="text" 
            id="url" 
            name="url" 
            required
          >
        </label>
        <label>
          <span>Ancho:</span>
          <input 
            type="text" 
            id="pageWidth"  
            name="pageWidth"  
            required
          >
        </label>
        <label>
          <span>Largo:</span>
          <input 
            type="text" 
            id="pageHeight"
            name="pageHeight" 
            required
          >
        </label>
      </form>
    `

    $(nestedWeb, "form").append(
      new Button({ type: "submit", innerHTML: "Testear" })
    )

    return nestedWeb
  }
}
