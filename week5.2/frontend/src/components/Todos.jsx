import React from 'react'

const Todos = ({ todos }) => {
    function updateTodo(id) {
        async function fetchAddTodo() {
            const response = await fetch('http://localhost:3001/completed', {
                method: "PUT",
                body: JSON.stringify({
                    id: id
                }),
                headers: {
                    "content-type": "application/json"
                }
            })
            const json = await response.json()
        }
        fetchAddTodo()
    }
    return (
        <div>
            {todos.map(function (todo) {
                return <div>
                    <h2>{todo.title}</h2>
                    <h3>{todo.description}</h3>
                    <button onClick={() => updateTodo(todo._id)}>{todo.completed == true ? "Completed" : "Mark as completed"}</button>
                </div>
            })}
        </div>
    )
}

export default Todos