// let globalId = 1;
// function addTodo() {
//     const title = document.getElementById('title').value
//     const description = document.getElementById('description').value
//     document.querySelector('.store').appendChild(createChild(title, description, globalId++));
// }

function createChild(title, description, id) {
    const child = document.createElement('div');
    const firstChild = document.createElement('div')
    firstChild.innerHTML = title;
    const secondChild = document.createElement('div')
    secondChild.innerHTML = description;
    const thirdChild = document.createElement('button')
    thirdChild.innerHTML = 'Mark as done';
    thirdChild.setAttribute('onclick', `markAsDone(${id})`)
    child.appendChild(firstChild);
    child.appendChild(secondChild);
    child.appendChild(thirdChild);
    child.setAttribute('id', id)
    return child
}

// function markAsDone(id) {
//     const selectedTodo = document.getElementById(id);
//     selectedTodo.children[2].innerHTML = 'Done!'
// }

function updateTodos(state) {
    const parent = document.querySelector('.store')
    parent.innerHTML = "";
    for (let i = 0; i < state.length; i++) {
        const child = createChild(state[i].title, state[i].description, state[i].id)
        parent.appendChild(child)
    }
}
window.setInterval(async function(){
    const res = await fetch("http://localhost:3000/todos");
    const json = await res.json()
    updateTodos(json.todos)
}, 3000);