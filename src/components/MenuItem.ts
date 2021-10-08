const MenuItem = (text: string): HTMLLIElement => {
  const li = document.createElement('li')
  li.innerHTML = text
  return li
}

export default MenuItem
