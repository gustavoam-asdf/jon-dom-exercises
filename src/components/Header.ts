import './styles/Header.css'

const Header = (): HTMLElement => {
  const header = document.createElement('header')
  header.classList.add('main-header')
  header.innerHTML = 'Ejercicios del DOM'

  return header
}

export default Header
