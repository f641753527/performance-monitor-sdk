const jsErrorCatch = () => {
  window.addEventListener('error', (event) => {
    console.log(event)
  })
}

export default jsErrorCatch
