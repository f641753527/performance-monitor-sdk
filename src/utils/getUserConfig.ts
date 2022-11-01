export default function() {
  return {
    title: document.title,
    timestamp: `${Date.now()}`,
    userAgent: navigator.userAgent
  }
}
