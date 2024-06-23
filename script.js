//Storing Dynamic Element

const decrementBtn = document.querySelector('.decrement')
const incrementBtn = document.querySelector('.increment')
const resetBtn = document.querySelector('.reset')
const counter = document.querySelector('.counter')

// Defining Functions

function decrementation () {
    let counterVal = counter.textContent
    if (counterVal == 0) {
        counterVal = 0
    } else {
        counterVal--
    }
    counter.textContent = counterVal
}

function incrementation () {
    let counterVal = counter.textContent
    counterVal++
    counter.textContent = counterVal
}

function reset () {
    counter.textContent = 0
}

//Setting EventListeners

decrementBtn.addEventListener('click', decrementation)
incrementBtn.addEventListener('click', incrementation)
resetBtn.addEventListener('click', reset)