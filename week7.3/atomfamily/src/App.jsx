
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { todosAtomFamily } from './atom'
import { useEffect } from 'react'

function App() {

  return (
    <div>
      <RecoilRoot>
        <UpdateTodo/>
        <Todo id={1} />
        <Todo id={2} />
      </RecoilRoot>
    </div>
  )
}

function UpdateTodo() {
  const updateTodo = useSetRecoilState(todosAtomFamily(2))

  useEffect(() => {
    // setTimeout(() => {
    //   updateTodo({
    //     id: "2",
    //     title: "new todo",
    //     description: "new todo"
    //   })
    // }, 3000)
  }, [])
  return <div></div>
}

function Todo({id}) {
  const todo = useRecoilValue(todosAtomFamily(id))
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <br />
    </div>
  )
}

export default App
