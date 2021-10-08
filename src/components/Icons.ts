const Icons = (iconName: string): HTMLLinkElement => {
  const link = document.createElement('link')
  link.setAttribute('rel', 'stylesheet')
  link.setAttribute('href', `./icons/${iconName}.svg`)
  return link
}

export default Icons
