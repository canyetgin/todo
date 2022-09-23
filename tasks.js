const taskList = document.querySelector('#taskList')
const newTaskValue = document.querySelector('#newTaskValue')
const taskAdd = document.querySelector('#addTask')

let currentTaskCount = Object.keys.length

const createNewTask = (oldTask) => {
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
  newTaskText.classList.add('d-flex', 'align-items-center', 'w-100', 'h-100','text-break')
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
  currentTaskCount++
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

storagedTasks()

const wrapper = document.querySelector('.wrapper'),
  header = wrapper.querySelector('.wrapperHeader')
function onDrag({ movementX, movementY }) {
  let getStyle = window.getComputedStyle(wrapper)
  let leftVal = parseInt(getStyle.left)
  let topVal = parseInt(getStyle.top)
  wrapper.style.left = `${leftVal + movementX}px`
  wrapper.style.top = `${topVal + movementY}px`
}
header.addEventListener('mousedown', () => {
  header.classList.add('active')
  header.addEventListener('mousemove', onDrag)
})
document.addEventListener('mouseup', () => {
  header.classList.remove('active')
  header.removeEventListener('mousemove', onDrag)
})
