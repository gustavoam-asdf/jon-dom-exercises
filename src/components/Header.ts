import StyleLink from './StyleLink.js'

const Header = (): HTMLElement => {
  const header = document.createElement('header')
  const sr: ShadowRoot = header.attachShadow({ mode: 'closed' })
  sr.prepend(StyleLink('components/header'))

  const text: HTMLSpanElement = document.createElement('h1')
  text.innerHTML = 'Ejercicios del DOM'
  text.classList.add('text')

  sr.appendChild(text)

  return header
}

export default Header()
