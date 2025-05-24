
import './App.css'
import { useRecoilValue,RecoilRoot } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './store'

function App() {

  return (
    <>
      <RecoilRoot>
        <MainApp/>
      </RecoilRoot>
    </>
  )
}

function MainApp() {
  const networkCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  const messagingCount = useRecoilValue(messagingAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  return (
    <div>
      <button>home</button>

      <button>network({networkCount >= 100 ? '99+' : networkCount})</button>
      <button>jobs({jobsCount >= 100 ? '99+' : jobsCount})</button>
      <button>messaging({messagingCount >= 100 ? '99+' : messagingCount})</button>
      <button>notification({notificationCount >= 100 ? '99+' : notificationCount})</button>

      <button>me</button>
    </div>
  )
}

export default App
