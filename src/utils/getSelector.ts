export default function (path = []) {
  return path.reverse().map((v: any) => {
    const nodeName = v === window ? 'window' : v.nodeName ? v.nodeName.toLowerCase() : v.tagName
    return `${nodeName}${v.id ? '#'+v.id : v.className ? '.' + v.className : ''}`
  }).join(' ')
}
