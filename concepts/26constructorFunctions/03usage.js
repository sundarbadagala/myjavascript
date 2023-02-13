function SuperElement(type, text){
    this.el = document.createElement(type)
    this.el.innerText = text
    document.body.append(this.el)
    this.el.addEventListenert('click', ()=>{
        console.log(this.el);
    })
}

const h1 = new SuperElement('h1', 'hello world')