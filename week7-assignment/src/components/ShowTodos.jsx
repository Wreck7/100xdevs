import React from 'react'
import { useRecoilValue } from 'recoil'
import { todosSpace } from '../store/todosSpace'

const ShowTodos = () => {
    const todos = useRecoilValue(todosSpace)
  return (
    <div>
        <h2>all todos</h2>
        <div>
            {todos.map((todo) => {
                return (
                    <div>
                        <p>title: {todo.title}</p>
                        <p>description: {todo.description}</p>
                        <br />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ShowTodos