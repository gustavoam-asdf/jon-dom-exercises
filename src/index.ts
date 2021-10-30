import App from "./App"

document.addEventListener("DOMContentLoaded", () => {
  // console.clear()
  const root: HTMLElement = document.getElementById("root") as HTMLElement
  const app = App()
  root.prepend(app)
})
