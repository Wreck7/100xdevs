import { RecoilRoot } from 'recoil'
import SectionMain from './components/SectionMain'
import './App.css'
import ShowTodos from './components/ShowTodos'

function App() {

  return (
    <div>
      <RecoilRoot>
        <SectionMain />
        <ShowTodos />
      </RecoilRoot>
    </div>
  )
}

export default App
