const obj= {
    name:'varun',
    message(){
        console.log(`hello ${this.name}`)
    }
}

obj.message()

setTimeout(obj.message, 100)

setTimeout(()=>obj.message(), 100)