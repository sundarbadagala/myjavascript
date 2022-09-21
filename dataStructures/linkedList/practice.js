class Node{
  constructor(value){
    this.value = value
    this.next = null 
  }
}

class List{
  constructor(){
    this.head = null
    this.size = 0
  }
  getSize(){
    return this.size
  }
  isEmpty(){
    return this.size === 0
  }
  prepend(el){
    const node = new Node(el)
    if(this.isEmpty()){
      this.head = node
    }else{
      node.next = this.head
      this.head = node
    }
    this.size++
  }
  append(el){
    const node = new Node(el)
    if(this.isEmpty()){
      this.head = node
    }else{
      let prev = this.head
      while(prev.next){
        prev = prev.next
      }
      prev.next = node
    }
    this.size++
  }
  insert(el, index){
    if(index < 0 || index > this.size){
      return
    }
    if(index === 0){
      this.prepend(el)
    }else{
      const node = new Node(el)
      let prev = this.head
      for(let i=0; i<index-1; i++){
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }
  remove(index){
    if(index < 0 || index >= this.size){
      return null
    }
    let removeNode
    if(index === 0){
      removeNode = this.head
      this.head = this.head.next
    }else{
      let prev = this.head
      for(let i=0; i< index - 1; i++){
        prev = prev.next
      }
      removeNode = prev.next
      prev.next = removeNode.next
    }
    this.size++
    return removeNode.value
  }
  print(){
    if(this.isEmpty()){
      console.log(null)
    }else{
      let curr = this.head
      let data = ''
      while(curr){
        data += `${curr.value} `
        curr = curr.next
      }
      console.log(data)
    }
  }
}

const list = new List()

list.append(4)
list.append(3)
list.append(9)
list.prepend(10)
list.insert(2,2)

list.print()