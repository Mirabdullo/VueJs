const decrementElement = document.querySelector('.decrement')
const counterTextElement = document.querySelector('.counter')
const incrementElemet = document.querySelector('.increment')


decrementElement.addEventListener('click', () => {
    counterTextElement.textContent > '0' ? counterTextElement.innerHTML = +counterTextElement.textContent - 1 : alert('Nima gappp')
})


incrementElemet.addEventListener('click', () => {
    counterTextElement.innerHTML = +counterTextElement.textContent + 1
})