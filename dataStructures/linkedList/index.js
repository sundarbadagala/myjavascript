class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  // Add at end (append)
  append(value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }

    this.size++
  }

  // Add at beginning
  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.size++
  }

  // Insert at index
  insert(value, index) {
    if (index < 0 || index > this.size) return

    if (index === 0) {
      this.prepend(value)
      return
    }

    const newNode = new Node(value)
    let prev = this.head

    for (let i = 0; i < index - 1; i++) {
      prev = prev.next
    }

    newNode.next = prev.next
    prev.next = newNode
    this.size++
  }

  // Remove by value
  remove(value) {
    if (!this.head) return null

    if (this.head.value === value) {
      this.head = this.head.next
      this.size--
      return value
    }

    let prev = this.head
    while (prev.next && prev.next.value !== value) {
      prev = prev.next
    }

    if (prev.next) {
      prev.next = prev.next.next
      this.size--
      return value
    }

    return null
  }

  // Search
  search(value) {
    let current = this.head
    let index = 0

    while (current) {
      if (current.value === value) return index
      current = current.next
      index++
    }

    return -1
  }

  // Print list
  print() {
    let current = this.head
    let result = ''

    while (current) {
      result += current.value + ' -> '
      current = current.next
    }

    console.log(result + 'null')
  }
}