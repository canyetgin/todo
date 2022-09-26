////////////////////////loadingStarts//////////////////////////////
setTimeout(() => {
  document.querySelector('#loader').style.display = 'none'
}, 2000)

////////////////////////loadingStarts//////////////////////////////

////////////////////////tasksStarts//////////////////////////////
const taskList = document.querySelector('#taskList')
const newTaskValue = document.querySelector('#newTaskValue')
const taskAdd = document.querySelector('#addTask')

let currentTaskCount = Object.keys.length

const createNewTask = (oldTask) => {
  currentTaskCount++
  const newTaskLine = document.createElement('ul')
  newTaskLine.id = currentTaskCount
  newTaskLine.classList.add('list-group', 'list-group-horizontal', 'd-flex')
  //
  const newTaskElement = document.createElement('li')
  newTaskElement.classList.add(
    'list-group-item',
    'd-flex',
    'align-items-center',
    'w-100'
  )
  //
  const newTaskText = document.createElement('label')
  newTaskText.classList.add(
    'd-flex',
    'align-items-center',
    'w-100',
    'h-100',
    'text-break'
  )
  //
  const newElementCheckbox = document.createElement('input')
  newElementCheckbox.type = 'checkbox'
  newElementCheckbox.classList.add('form-check-input', 'me-2')
  //
  const newTaskButton = document.createElement('li')
  newTaskButton.classList.add('list-group-item')
  //
  const newElementDeleteBtn = document.createElement('button')
  newElementDeleteBtn.type = 'button'
  newElementDeleteBtn.classList.add(
    'btn',
    'btn-block',
    'btn-outline-secondary',
    'shadow-none',
    'px-auto'
  )

  const innerButton = document.createElement('i')
  innerButton.classList.add('bi', 'bi-trash', 'bi-lg')
  newElementDeleteBtn.append(innerButton)
  newTaskButton.append(newElementDeleteBtn)

  //

  //

  if (oldTask) {
    newTaskText.textContent = oldTask
    newTaskText.prepend(newElementCheckbox)
    newTaskElement.append(newTaskText)
    newTaskLine.append(newTaskElement)
    taskList.append(newTaskLine)
    newTaskLine.append(newTaskButton)
  } else {
    newTaskText.textContent = newTaskValue.value
    localStorage.setItem(newTaskLine.id, newTaskValue.value)
    newTaskText.prepend(newElementCheckbox)
    newTaskElement.append(newTaskText)
    newTaskLine.append(newTaskElement)
    taskList.append(newTaskLine)
    newTaskLine.append(newTaskButton)
  }
  newTaskValue.value = ''

  newElementDeleteBtn.addEventListener('click', () => {
    localStorage.removeItem(newTaskLine.id)
    taskList.removeChild(document.getElementById(newTaskLine.id))
  })

  newElementCheckbox.addEventListener('click', () => {
    if (newElementCheckbox.checked) {
      newTaskText.classList.add('text-decoration-line-through')
    } else {
      newTaskText.classList.remove('text-decoration-line-through')
    }
  })
  newTaskText.addEventListener('click', () => {
    if (newElementCheckbox.checked) {
      newTaskText.classList.add('text-decoration-line-through')
    } else {
      newTaskText.classList.remove('text-decoration-line-through')
    }
  })

  return
}

taskAdd.addEventListener('click', () => {
  createNewTask('')
})

newTaskValue.addEventListener('keypress', function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === 'Enter') {
    // Cancel the default action, if needed
    event.preventDefault()
    // Trigger the button element with a click
    createNewTask('')
  }
})

const storagedTasks = () => {
  const storagedTask = Object.keys(localStorage)
  storagedTask.forEach((task) => {
    createNewTask(localStorage.getItem(task))
  })
}
//initUserTasks
storagedTasks()

////////////////////////tasksEnds//////////////////////////////

////////////////////////wrapper1Starts//////////////////////////////

//selectWrapper
const wrapper1 = document.querySelector('.wrapper1'),
  header1 = wrapper1.querySelector('.wrapperHeader1')

//wrapper1InitUserPref

const initWrapper1Position = localStorage.getItem('wrapper1Position')
const paseWrapper1 = JSON.parse(initWrapper1Position)
wrapper1.style.left = `${paseWrapper1.left}`
wrapper1.style.top = `${paseWrapper1.top}`

//dragDesktop

function onDrag1({ movementX, movementY }) {
  let getStyle = window.getComputedStyle(wrapper1)
  let leftVal = parseInt(getStyle.left)
  let topVal = parseInt(getStyle.top)
  wrapper1.style.left = `${leftVal + movementX}px`
  wrapper1.style.top = `${topVal + movementY}px`
}

header1.addEventListener('mousedown', () => {
  header1.classList.add('active')
  document.addEventListener('mousemove', onDrag1)
})

document.addEventListener('mouseup', () => {
  header1.classList.remove('active')
  const wrapper1Position = {
    top: wrapper1.style.top,
    left: wrapper1.style.left,
  }
  localStorage.setItem('wrapper1Position', JSON.stringify(wrapper1Position))
  document.removeEventListener('mousemove', onDrag1)
})

//dragMobile
function onTouch1(e) {
  e.preventDefault()
  console.log('sa') //+touche.touches[0].clientX)
  wrapper1.style.left = `${e.touches[0].clientX - 80}px`
  wrapper1.style.top = `${e.touches[0].clientY - 15}px`
}

header1.addEventListener('touchstart', () => {
  console.log('touched')
  header1.classList.add('active')
  document.addEventListener('touchmove', onTouch1)
})

document.addEventListener('touchend', () => {
  console.log('finished')
  header1.classList.remove('active')
  const wrapper1Position = {
    top: wrapper1.style.top,
    left: wrapper1.style.left,
  }
  localStorage.setItem('wrapper1Position', JSON.stringify(wrapper1Position))
  document.removeEventListener('touchmove', onTouch1)
})

////////////////////////wrapper1Ends//////////////////////////////

////////////////////////wrapper2Starts//////////////////////////////

//selectWrapper
const wrapper2 = document.querySelector('.wrapper2'),
  header2 = wrapper2.querySelector('.wrapperHeader2')

//wrapper2InitUserPref

const initWrapper2Position = localStorage.getItem('wrapper2Position')
const paseWrapper2 = JSON.parse(initWrapper2Position)
wrapper2.style.left = `${paseWrapper2.left}`
wrapper2.style.top = `${paseWrapper2.top}`

//dragDesktop

function onDrag2({ movementX, movementY }) {
  let getStyle = window.getComputedStyle(wrapper2)
  let leftVal = parseInt(getStyle.left)
  let topVal = parseInt(getStyle.top)
  wrapper2.style.left = `${leftVal + movementX}px`
  wrapper2.style.top = `${topVal + movementY}px`
}

header2.addEventListener('mousedown', () => {
  header2.classList.add('active')
  document.addEventListener('mousemove', onDrag2)
})

document.addEventListener('mouseup', () => {
  header2.classList.remove('active')
  const wrapper2Position = {
    top: wrapper2.style.top,
    left: wrapper2.style.left,
  }
  localStorage.setItem('wrapper2Position', JSON.stringify(wrapper2Position))
  document.removeEventListener('mousemove', onDrag2)
})

//dragMobile
function onTouch2(e) {
  e.preventDefault()
  console.log('sa') //+touche.touches[0].clientX)
  wrapper2.style.left = `${e.touches[0].clientX - 80}px`
  wrapper2.style.top = `${e.touches[0].clientY - 15}px`
}

header2.addEventListener('touchstart', () => {
  console.log('touched')
  header2.classList.add('active')
  document.addEventListener('touchmove', onTouch2)
})

document.addEventListener('touchend', () => {
  console.log('finished')
  header2.classList.remove('active')
  const wrapper2Position = {
    top: wrapper2.style.top,
    left: wrapper2.style.left,
  }
  localStorage.setItem('wrapper2Position', JSON.stringify(wrapper2Position))
  document.removeEventListener('touchmove', onTouch2)
})

////////////////////////wrapper2Ends//////////////////////////////

////////////////////////wrapper3Starts//////////////////////////////

//selectWrapper
const wrapper3 = document.querySelector('.wrapper3'),
  header3 = wrapper3.querySelector('.wrapperHeader3')

//wrapper3InitUserPref

const initWrapper3Position = localStorage.getItem('wrapper3Position')
const paseWrapper3 = JSON.parse(initWrapper3Position)
wrapper3.style.left = `${paseWrapper3.left}`
wrapper3.style.top = `${paseWrapper3.top}`

//dragDesktop

function onDrag3({ movementX, movementY }) {
  let getStyle = window.getComputedStyle(wrapper3)
  let leftVal = parseInt(getStyle.left)
  let topVal = parseInt(getStyle.top)
  wrapper3.style.left = `${leftVal + movementX}px`
  wrapper3.style.top = `${topVal + movementY}px`
}

header3.addEventListener('mousedown', () => {
  header3.classList.add('active')
  document.addEventListener('mousemove', onDrag3)
})

document.addEventListener('mouseup', () => {
  header3.classList.remove('active')
  const wrapper3Position = {
    top: wrapper3.style.top,
    left: wrapper3.style.left,
  }
  localStorage.setItem('wrapper3Position', JSON.stringify(wrapper3Position))
  document.removeEventListener('mousemove', onDrag3)
})

//dragMobile
function onTouch3(e) {
  e.preventDefault()
  console.log('sa') //+touche.touches[0].clientX)
  wrapper3.style.left = `${e.touches[0].clientX - 80}px`
  wrapper3.style.top = `${e.touches[0].clientY - 15}px`
}

header3.addEventListener('touchstart', () => {
  console.log('touched')
  header3.classList.add('active')
  document.addEventListener('touchmove', onTouch3)
})

document.addEventListener('touchend', () => {
  console.log('finished')
  header3.classList.remove('active')
  const wrapper3Position = {
    top: wrapper3.style.top,
    left: wrapper3.style.left,
  }
  localStorage.setItem('wrapper3Position', JSON.stringify(wrapper3Position))
  document.removeEventListener('touchmove', onTouch3)
})

////////////////////////wrapper3Ends//////////////////////////////

// Select Every Count Container
const countContainer = document.querySelectorAll('.count-digit')

// Select option buttons
const startAction = document.getElementById('start-timer')
const stopAction = document.getElementById('stop-timer')
const resetAction = document.getElementById('reset-timer')

// Select HTML5 Audio element
const timeoutAudio = document.getElementById('alarm_audio')

// Default inital value of timer
const defaultValue = 3 * 60

// variable to the time
var countDownTime = defaultValue

// variable to store time interval
var timerID

// Variable to track whether timer is running or not
var isStopped = true

// Function calculate time string
const findTimeString = () => {
  var minutes = String(Math.trunc(countDownTime / 60))
  var seconds = String(countDownTime % 60)
  if (minutes.length === 1) {
    minutes = '0' + minutes
  }
  if (seconds.length === 1) {
    seconds = '0' + seconds
  }
  return minutes + seconds
}

// Function to start Countdown
const startTimer = () => {
  if (isStopped) {
    isStopped = false
    timerID = setInterval(runCountDown, 1000)
  }
}

// Function to stop Countdown
const stopTimer = () => {
  isStopped = true
  if (timerID) {
    clearInterval(timerID)
  }
}

// Function to reset Countdown
const resetTimer = () => {
  stopTimer()
  countDownTime = defaultValue
  renderTime()
}

// Initialize alarm sound
timeoutAudio.src = 'http://soundbible.com/grab.php?id=1252&type=mp3'
timeoutAudio.load()

// Attach onclick event to buttons
startAction.onclick = startTimer
resetAction.onclick = resetTimer
stopAction.onclick = stopTimer

// Function to display coundown on screen
const renderTime = () => {
  const time = findTimeString()
  countContainer.forEach((count, index) => {
    count.innerHTML = time.charAt(index)
  })
}

// function to execute timer
const runCountDown = () => {
  // decement time
  countDownTime -= 1
  //Display updated time
  renderTime()

  // timeout on zero
  if (countDownTime === 0) {
    stopTimer()
    // Play alarm on timeout
    timeoutAudio.play()
    countDownTime = defaultValue
  }
}

////////////////////////workSpacesStarts//////////////////////////////

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

////////////////////////workSpacesEnd//////////////////////////////
