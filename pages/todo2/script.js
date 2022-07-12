const todo = document.getElementById('todo')
const add = document.getElementById('add')
const todos = document.getElementById('todos')

add.addEventListener('click', function(){
    const para = document.createElement('p')
    para.textContent = todo.value

    const del = document.createElement('button')
    del.textContent='X'
    para.appendChild(del)

    todo.value !== '' && todos.appendChild(para)
    todo.value = ''


    del.addEventListener('click', function(){
        todos.removeChild(para)
    })

})