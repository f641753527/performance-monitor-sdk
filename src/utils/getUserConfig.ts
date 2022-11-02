export default function() {
  return {
    _title: document.title,
    _timestamp: `${Date.now()}`,
    _userAgent: navigator.userAgent,
    _url: location.href
  }
}
