//----------------class------------

class MessageOne {
    constructor(text){
        this.text = text
    }
    say(){
        return this.text
    }
}


//-----------------constructor function--------------
const MessageTwo = function(text){
    this.text = text
    this.say = ()=>{
        return this.text
    }
}

//--------------------factory function--------------

const MessageThree = function(text){
    return {
        say (){
            return text
        }
    }
}

const messageOne = new MessageOne('hello world')
const messageTwo = new MessageTwo('hello earth')
const messageThree = MessageThree('hello universe')

console.log(messageOne.say());
console.log(messageTwo.say());
console.log(messageThree.say());