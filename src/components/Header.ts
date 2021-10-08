import './styles/Header.css'

const Header = (): HTMLElement => {
  const header = document.createElement('header')
  const sr: ShadowRoot = header.attachShadow({ mode: 'closed' })

  const text: HTMLSpanElement = document.createElement('h1')
  text.innerHTML = 'Ejercicios del DOM'
  text.classList.add('text')

  sr.append(text)

  return header
}

export default Header
