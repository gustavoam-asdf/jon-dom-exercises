import './styles/MenuItem'

const MenuItem = (innerHTML: string): HTMLLIElement => {
  const li = document.createElement('li')
  li.classList.add('menu-item')
  li.innerHTML = innerHTML
  return li
}

export default MenuItem
