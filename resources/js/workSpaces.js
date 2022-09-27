function workSpaces(params) {
  const changeSpaceNext = document.querySelector('#changeSpaceNext')
  const changeSpacePrevious = document.querySelector('#changeSpacePrevious')
  const spaceBackground = document.querySelector('iframe')
  const workspaces = [
    'https://www.youtube.com/embed/hyE4Z4QMpRk?autoplay=1&amp;mute=0&amp;controls=0&amp;start=12&amp;origin=https%3A%2F%2Flifeat.io&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1',

    'https://www.youtube.com/embed/n61ULEU7CO0?autoplay=1&amp;mute=0&amp;controls=0&amp;start=12&amp;origin=https%3A%2F%2Flifeat.io&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1',

    'https://www.youtube.com/embed/1fueZCTYkpA?autoplay=1&amp;mute=0&amp;controls=0&amp;start=12&amp;origin=https%3A%2F%2Flifeat.io&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1',
  ]
  let currentSpace = -1
  changeSpaceNext.addEventListener('click', () => {
    currentSpace++
    document.querySelector('img').remove()
    changeSpacePrevious.disabled = false
    if (currentSpace === 2) {
      changeSpaceNext.disabled = true
    }

    spaceBackground.src = workspaces[currentSpace]
    console.log(currentSpace)
  })

  changeSpacePrevious.addEventListener('click', () => {
    if (currentSpace <= 0) {
      changeSpacePrevious.disabled = true
    } else {
      currentSpace--
    }

    spaceBackground.src = workspaces[currentSpace]

    console.log(currentSpace)
  })
}
export { workSpaces }
