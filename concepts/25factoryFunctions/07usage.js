function createEelement(type, text, color) {
    const el = document.createElement(type)
    el.innerText = text
    el.style.color = color
    document.body.append(el)
    return {
        el,
        setTex(text) {
            el.innerText = text
        },
        setColor(color) {
            el.style.color = color
        }
    }
}

const h1 = createEelement('h1','hello world', 'red')

h1.setTex('hello gurys')
h1.setColor('blue')