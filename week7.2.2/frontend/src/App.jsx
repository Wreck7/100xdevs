
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { countAtom } from './store/count'

function App() {
  console.log('rerendering count')
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log('rerendering count')
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <Statement />
    </div>
  )
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return (
    <div>
      {count}
    </div>
  )
}


function Buttons() {
  console.log('rerendering count')
  // setCount(count + 1) is wrong because it will cause a rereder on buttons here
  // setCount(c => c+1) is correct because it doesnt cause a rerender on buttons
  const setCount = useSetRecoilState(countAtom)
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>increase</button>
      <button onClick={() => setCount(c => c + 1)}>decrease</button>
    </div>
  )
}

function Statement(){
  const count = useRecoilValue(countAtom)
  return (
    <div>
      {count%2===0 ? "even": null}
    </div>
  )
}

export default App
