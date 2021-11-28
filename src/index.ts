import App from "./App"

document.addEventListener("DOMContentLoaded", () => {
  const root: HTMLElement = document.getElementById("root") as HTMLElement
  const app = App()
  root.prepend(app)
})
