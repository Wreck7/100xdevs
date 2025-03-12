import React from 'react'
import { useState } from 'react'

const CreateTodo = ({setTodos, todos}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    function handlePostTodo() {
        async function fetchAddTodo() {
            const response = await fetch('http://localhost:3001/todo', {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "content-type": "application/json"
                }
            })
            const json = await response.json()
            
            alert('Todo added successfully!')
            setTodos([...todos, {title, description}])
        }
        fetchAddTodo()
    }
    return (
        <div>
            <input onChange={(e) => {
                const value = e.target.value
                setTitle(value)
            }} type="text" placeholder='Title' /> <br />
            <input onChange={(e) => {
                const value = e.target.value
                setDescription(value)
            }} type="text" placeholder='Description' /> <br />
            <button onClick={handlePostTodo}>Add a todo</button>
        </div>
    )
}

export default CreateTodo