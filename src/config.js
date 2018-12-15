export default {
  supports: {
    passive: supportsPassive(),
    scrollIntoView: supportsScrollIntoView()
  }
}

function supportsScrollIntoView () {
  return document.createElement('span').scrollIntoView() !== undefined
}

function supportsPassive () {
  let supportsPassive = false
  try {
    let opts = Object.defineProperty({}, 'passive', {
      get () {
        supportsPassive = true
      }
    })
    window.addEventListener('test', null, opts)
  } catch (e) {}
  return supportsPassive
}
