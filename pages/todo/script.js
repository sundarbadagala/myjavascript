function handleClick(){
    const todo = document.getElementById('todo').value
    const error = document.getElementById('error')
    error.innerHTML = ''
    if(todo === ''){
        document.getElementById('error').innerHTML='Please Enter'
    }else{
        const todos = document.getElementById('todos')

        const li = document.createElement('li')
        li.textContent = todo

        const del = document.createElement('button')
        del.textContent='x'

        li.appendChild(del)

        const isEmpty = todos.firstElementChild
        
        if(isEmpty === null){
            todos.appendChild(li)
        }else{
            todos.insertBefore(li,isEmpty)
        }
    }
    document.getElementById('todo').value =''
}

const btn = document.querySelector('ul')
btn.addEventListener('click', function(e){
    const todos = document.getElementById('todos')
    const li = e.target.parentNode
    todos.removeChild(li)
})