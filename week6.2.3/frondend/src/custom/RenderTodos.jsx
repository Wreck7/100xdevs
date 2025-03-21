import { useState, useEffect } from 'react'
import axios from 'axios'

function useTodos() {
    const [todos, setTodos] = useState(0)

    useEffect(() => {
        axios.get('http://localhost:3000/todos')
            .then(res => {
                setTodos(res.data.todos)
            })
    }, [])
    return todos;
}

export default useTodos;