const emptyList = ['body', 'html', '#app', '.container']


export const getSelectorByElement = (element: Element) => {
  if (element.id) return `#${element.id}`
  if (element.className) return `.${element.className}`
  return element.nodeName.toLocaleLowerCase()
}

export const isScreenElemBlank = (element: Element | null) => {
  if (!element) return true

  const selector = getSelectorByElement(element)

  if (emptyList.includes(selector)) return true

  return false
}
