import { RecoilRoot } from 'recoil'
import SectionMain from './components/SectionMain'
import './App.css'

function App() {

  return (
    <div>
      <RecoilRoot>
        <SectionMain />
      </RecoilRoot>
    </div>
  )
}

export default App
