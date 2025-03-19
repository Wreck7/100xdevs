import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';


const Todo = ({id}) => {
    const [todo, setTodo] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:3000/todo?id=${id}`)
        .then(res => {
            setTodo(res.data.todo)
        })
    }, [id])

    return (
        <div>
            <h2>{todo.title}</h2>
            <h3>{todo.description}</h3>
        </div>
    )
}

export default Todo