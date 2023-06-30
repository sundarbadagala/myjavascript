let count = 0

const incrementEl = document.getElementById('increment')
const decrementEl = document.getElementById('decrement')
const countEl = document.getElementById('count')

countEl.innerText = 0
countEl.style.color = 'red'
countEl.style.fontSize = '24px'

incrementEl.addEventListener('click', () => {
    count--
    handleCount(count)
})

decrementEl.addEventListener('click', () => {
    count++
    handleCount(count)
})

const handleCount = (c) => {
    if (c <= 5) {
        countEl.style.color = 'red'
    } else {
        countEl.style.color = 'green'
    }
    countEl.innerText = c
}