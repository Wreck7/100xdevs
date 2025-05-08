
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { countAtom, evenCount } from './store/count'
import { useMemo } from 'react'

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
  // setCount(count + 1) is wrong because it will cause a rerender on buttons here
  // setCount(c => c+1) is correct because it doesn't cause a rerender on buttons
  const setCount = useSetRecoilState(countAtom)
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>increase</button>
      <button onClick={() => setCount(c => c - 1)}>decrease</button>
    </div>
  )
}

function Statement(){

  // this is useMemo method these both are same in performance
  // const count = useRecoilValue(countAtom)
  // const isEven = useMemo(() => {
    //   return count%2 == 0
    // }, [count])

    // this is selector method both are same in performance(but selector is more readable and easy to )
    const isEven = useRecoilValue(evenCount)
  return (
    <div>
      {isEven ? "even": null}
    </div>
  )
}

export default App
