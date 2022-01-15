import root from "@components/Root"
import App from "./App"

document.addEventListener("DOMContentLoaded", () => {
  console.clear()
  const app = App()
  root.prepend(app)
})
