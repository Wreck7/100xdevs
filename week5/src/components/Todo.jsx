import React from 'react'

const Todo = (props) => {
    function addTodo() {
        props.setTodos([...props.todos, {
            title: 'todo2',
            description: 'thing of todo2',
            id: props.todos.length
        }])
    }
  return (
    <div>
        <button onClick={addTodo}>
            add todo
        </button>
        {props.todos.map((todo)=>{
            return <div key={props.id}>
                <h4>{todo.title}</h4>
                <h6>{todo.description}</h6>
            </div>
        })}
    </div>
  )
}

export default Todo