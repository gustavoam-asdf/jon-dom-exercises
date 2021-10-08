import StyleLink from './StyleLink.js'

const Header = (): HTMLElement => {
  const header = document.createElement('header')
  const sr: ShadowRoot = header.attachShadow({ mode: 'closed' })
  const text: HTMLSpanElement = document.createElement('span')
  const styles = StyleLink('components/header')
  text.innerHTML = 'Hola mundooo'
  text.classList.add('text')

  sr.prepend(styles)
  sr.appendChild(text)

  return header
}

export default Header()
