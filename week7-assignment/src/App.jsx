import { RecoilRoot } from 'recoil'
import SectionMain from './components/SectionMain'
import './App.css'
import ShowTodos from './components/ShowTodos'
import SearchFeature from './components/SearchFeature'

function App() {

  return (
    <div>
      <RecoilRoot>
        <SectionMain />
        <br />
        <SearchFeature />
        {/* <ShowTodos /> */}
      </RecoilRoot>
    </div>
  )
}

export default App
