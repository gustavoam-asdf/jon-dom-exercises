import root from "@components/Root"
import App from "./App"

document.addEventListener("DOMContentLoaded", () => {
  const app = App()
  root.prepend(app)
})
