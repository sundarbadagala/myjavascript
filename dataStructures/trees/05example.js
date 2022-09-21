class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }
    insert(el, root = this.root) {
        const node = new Node(el)
        if (this.isEmpty()) {
            this.root = node
        } else {
            if (root.value > node.value) {
                if (root.left === null) {
                    root.left = node
                } else {
                    this.insert(el, root.left)
                }
            } else {
                if (root.right === null) {
                    root.right = node
                } else {
                    this.insert(el, root.right)
                }
            }
        }
    }
    search(value, root = this.root) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(value, root.left)
            } else {
                return this.search(value, root.right)
            }
        }
    }
    print() {
        console.log(this.root)
    }
}

const tree = new Tree()

tree.insert(8)
tree.insert(7)
tree.insert(10)
tree.insert(9)
tree.insert(1)
tree.print()
console.log(tree.search(1))