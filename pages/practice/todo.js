function handleClick() {
  let todo = document.getElementById("todo").value;
  console.log(todo);
  const error = document.getElementById("error");
  error.innerHTML = "";
  if (todo === "") {
    error.innerHTML = "please enter";
  } else {
    const todos = document.getElementById("todos");

    const isEmpty = todos.firstElementChild;

    const li = document.createElement("li");
    li.textContent = todo;

    const del = document.createElement('button')
    del.textContent ='X'

    li.appendChild(del)

    if (isEmpty === null) {
      todos.appendChild(li);
    } else {
      todos.insertBefore(li, isEmpty);
    }
  }
  document.getElementById('todo').value = ''
}

const btn = document.querySelector('ul')

btn.addEventListener('click', function(e){
    const todos = document.getElementById('todos')
    const li = e.target.parentNode
    todos.removeChild(li)
})