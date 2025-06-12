
import './App.css'
import React from 'react'
import { RecoilRoot, useRecoilValue, useRecoilValueLoadable} from 'recoil'
import { todoAtomFamily } from './atoms'

function App() {
  return (
    <div>
      <RecoilRoot>
        <Todo id={1}/>
        <Todo id={2}/>
      </RecoilRoot>
    </div>
  )
}

function Todo({id}) {
  // const todo = useRecoilValue(todoAtomFamily(id))   // this this for selectorfamily
  const todo = useRecoilValueLoadable(todoAtomFamily(id)) // this is for userecoilvalueloadable
  if (todo.state === 'loading'){
    return <p>Loading</p>
  }else if (todo.state === 'hasValue'){
  return (
    <div>
      <p>{todo.contents.title}</p>
      <p>{todo.contents.description}</p>
    </div>
  )}
}

export default App
