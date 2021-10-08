const StyleLink = (path: string): HTMLLinkElement => {
  const link = document.createElement('link')
  link.setAttribute('rel', 'stylesheet')
  link.setAttribute('href', `../assets/styles/${path}.css`)
  return link
}

export default StyleLink
