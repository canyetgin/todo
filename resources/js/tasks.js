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
if (initWrapper1Position) {
  wrapper1.style.left = `${paseWrapper1.left}`
  wrapper1.style.top = `${paseWrapper1.top}`
}

//dragDesktop

function onDrag1({ movementX, movementY }) {
  let getStyle = window.getComputedStyle(wrapper1)
  let leftVal = parseInt(getStyle.left)
  let topVal = parseInt(getStyle.top)
  console.log(document.body.clientWidth)
  if (leftVal + movementX >= document.body.clientWidth - 180) {
    return
  }
  if (topVal + movementY >= document.body.clientHeight - 50) {
    return
  }
  if (leftVal + movementX <= -1) {
    return
  }
  if (topVal + movementY <= -1) {
    return
  }
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
  console.log(document.body.clientWidth )
  if (e.touches[0].clientX >= document.body.clientWidth - 95) {
    return
  }
  if (e.touches[0].clientY >= document.body.clientHeight - 35) {
    return
  }
  if (e.touches[0].clientX <= 85) {
    return
  }
  if (e.touches[0].clientY <= 16) {
    return
  }
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

if (initWrapper2Position) {
  wrapper2.style.left = `${paseWrapper2.left}`
  wrapper2.style.top = `${paseWrapper2.top}`
}

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
if (initWrapper3Position) {
  wrapper3.style.left = `${paseWrapper3.left}`
  wrapper3.style.top = `${paseWrapper3.top}`
}
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

import { counter } from './counter.js'
counter()

////////////////////////workSpacesStarts//////////////////////////////

import { workSpaces } from './workSpaces.js'
workSpaces()
////////////////////////workSpacesEnd//////////////////////////////
