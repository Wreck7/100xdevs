import React from 'react'
import { useState, useEffect } from 'react'
import { useRecoilState} from 'recoil'
import { todosSpace } from '../store/todosSpace'

const SectionMain = () => {
    const [todos, setTodos] = useRecoilState(todosSpace)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const addTodo = () => {
      if (title.trim() && desc.trim()) {
        setTodos([...todos, { id: Date.now(), title: title, description: desc, done: false }]);
        setTitle('');
        setDesc('');
      }
    };
    useEffect(() => {
      // console.log(todos);
    }, [todos]);
  return (
    <div>
        Todo: <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
        <br />
        <br />
        Description: <input type="text" onChange={(e) => setDesc(e.target.value)} value={desc} />
        <br />
        <br />
        <button onClick={addTodo}>add todo</button>
    </div>
  )
}

export default SectionMain