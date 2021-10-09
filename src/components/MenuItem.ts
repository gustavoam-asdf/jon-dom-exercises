import './styles/MenuItem'

const MenuItem = (text: string): HTMLLIElement => {
  const li = document.createElement('li')
  li.classList.add('menu-item')
  li.innerHTML = text
  return li
}

export default MenuItem
