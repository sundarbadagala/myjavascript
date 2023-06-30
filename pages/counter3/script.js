let count = 0

const countEl = document.getElementById('count')

countEl.innerText = 0
countEl.style.color = 'red'
countEl.style.fontSize = '24px'

const handleIncrement = () => {
    count++
    handleCount(count)
}

const handleDecrement = () => {
    count--
    handleCount(count)
}


const handleCount = (c) => {
    if (c <= 5) {
        countEl.style.color = 'red'
    } else {
        countEl.style.color = 'green'
    }
    countEl.innerText = c
}
