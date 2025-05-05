import { useRecoilState, useRecoilValue } from "recoil"
import React from 'react';
import { countAtom } from "./store/count"

function App() {

  return (
    <div>
      <Count />
    </div>
  )
}

function Count() {
  return (
    <div>
      <CountRender />
      <Button />
    </div>
  )
}

function CountRender() {
  const count = useRecoilValue(countAtom)
  return (
    <div>
      <b>
        {count}
      </b>
    </div>
  )
}


function Button() {
  const [count, setCount] = useRecoilState(countAtom)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  )
}
export default App
