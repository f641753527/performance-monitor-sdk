export default function (path = []) {
  return path.filter(v => v !== window && v !== document).reverse().map((v: any) => {
    const nodeName = v.nodeName.toLowerCase()
    return `${nodeName}${v.id ? '#'+v.id : v.className ? '.' + v.className : ''}`
  }).join(' ')
}
