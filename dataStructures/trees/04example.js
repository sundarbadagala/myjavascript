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
                if (root.left === null) return root.left = node
                return this.insert(el, root.left)
            }
            if (root.value < node.value) {
                if (root.right === null) return root.right = node
                return this.insert(el, root.right)
            }
        }
    }
    search(value, root = this.root) {
        if (!root) {
            return false
        }
        if (root.value === value) {
            return true
        }
        if (root.value > value) {
            return this.search(value, root.left)
        }
        if (root.value < value) {
            return this.search(value, root.right)
        }
    }
    preOrder(root = this.root) {
        if (root) {
            //read the data of the node
            //visit the left sub tree
            //visit the right sub tree
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root = this.root) {
        if (root) {
            //visit the left sub tree
            //read the data of the node
            //visit the right sub tree
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root = this.root){
        if(root){
            //visit the left sub tree
            //visit the right sub tree
            //read the data of the node
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    levelOrder(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            const curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    min(root= this.root){
        if(!root.left){
            return root.value
        }
        return this.min(root.left)
    }
    max(root = this.root){
        if(!root.right){
            return root.value
        }
        return this.max(root.right)
    }
    delete(value, root = this.root){
        if(root === null){
            return root
        }
        if(value < root.value){
            root.left = this.delete(value, root.left)
        }else if(value > root.value){
            root.right = this.delete(value, root.right)
        }else{
            if(!root.right && !root.left){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.delete(root.value, root.right)
        }
        return root
    }
    print() { 
        console.log(this.root)
    }
}

const tree = new Tree()

// tree.insert(8)
// tree.insert(7)
// tree.insert(10)
// tree.insert(9)
// tree.insert(1)
// tree.insert(3)
// tree.insert(6)

tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)

tree.levelOrder()

console.log('---')

tree.delete(3)
tree.levelOrder()