const incrementEl = document.getElementById('increment')
const decrementEl = document.getElementById('decrement')
const countEl = document.getElementById('count')

countEl.innerText = 0
countEl.style.color = 'red'
countEl.style.fontSize = '24px'

class Counter {
    constructor(countEl) {
        this.counter = 0;
        this.countEl = countEl
    }
    increment() {
        this.counter += 1
        this.update()
    }
    decrement() {
        this.counter -= 1
        this.update()
    }
    update() {
        if (this.counter <= 5) {
            this.countEl.style.color = 'red'
        } else {
            this.countEl.style.color = 'green'
        }
        this.countEl.innerText = this.counter
    }
}

const counter = new Counter(countEl)

incrementEl.addEventListener('click', () => counter.increment())
decrementEl.addEventListener('click', () => counter.decrement())