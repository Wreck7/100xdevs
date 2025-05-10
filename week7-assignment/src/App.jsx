import { RecoilRoot } from 'recoil'
import SectionMain from './components/SectionMain'
import './App.css'
import ShowTodos from './components/ShowTodos'
import Search from './components/Search'

function App() {

  return (
    <div>
      <RecoilRoot>
        <SectionMain />
        <Search />
        <ShowTodos />
      </RecoilRoot>
    </div>
  )
}

export default App
