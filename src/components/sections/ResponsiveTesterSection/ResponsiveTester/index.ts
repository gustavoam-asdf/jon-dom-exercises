import Button from "@components/Button"
import executeClick from "@utils/executeClick"
import { $ } from "@utils/selector"

export default class ResponsiveTester implements SectionChild {
  public self: HTMLDivElement
  public button: Button
  public window?: Window
  static className = "responsive-tester"

  constructor() {
    this.button = new Button({ type: "submit", innerHTML: "Testear" })
    this.self = this.template()
    setTimeout(() => {
      $(document.documentElement, '[href="#responsive-tester"]').click()
    }, 1000)
  }

  public clickEvent(evt: any) {
    return executeClick({
      evt,
      selectors: `.${ResponsiveTester.className} button`,
      action: () => {
        evt.preventDefault()
        if (this.window) {
          this.window.close()
          this.window = undefined
          this.button.textContent = "Testear"
          return
        }

        const url = $<HTMLInputElement>(this.self, "input[name='url']").value
        const pageWidth = $<HTMLInputElement>(
          this.self,
          "input[name='pageWidth']"
        ).value
        const pageHeight = $<HTMLInputElement>(
          this.self,
          "input[name='pageHeight']"
        ).value

        this.window = window.open(
          url,
          "",
          `popup, width=${pageWidth}, height=${pageHeight}`
        ) as Window
        this.button.textContent = "Cerrar"

        console.log({ url, pageWidth, pageHeight })
      }
    })
  }

  private template() {
    const nestedWeb = document.createElement("div")
    nestedWeb.classList.add(ResponsiveTester.className)

    nestedWeb.innerHTML = `
      <form>
        <label>
          <span>Url :</span>
          <input 
            type="text" 
            id="url" 
            name="url" 
            required
          >
        </label>
        <label>
          <span>Ancho :</span>
          <input 
            type="text" 
            id="pageWidth"  
            name="pageWidth"  
            required
          >
        </label>
        <label>
          <span>Largo :</span>
          <input 
            type="text" 
            id="pageHeight"
            name="pageHeight" 
            required
          >
        </label>
      </form>
    `

    $(nestedWeb, "form").append(this.button)

    return nestedWeb
  }
}
