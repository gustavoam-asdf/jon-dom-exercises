import './styles/MenuItem'

const MenuItem = ({
  href = '#',
  innerHTML
}: {
  href?: string
  innerHTML: string
}): HTMLAnchorElement => {
  const a = document.createElement('a')
  a.classList.add('menu-item')
  a.setAttribute('href', href)
  a.innerHTML = innerHTML
  return a
}

export default MenuItem
