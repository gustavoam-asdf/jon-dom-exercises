import "./styles/Header"

const Header = (): HTMLElement => {
  const header = document.createElement("header")
  header.classList.add("main-header")
  header.innerHTML = "<h1>Ejercicios del DOM</h1>"

  return header
}

export default Header
