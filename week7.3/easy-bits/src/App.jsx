
import './App.css'
import { useRecoilValue,RecoilRoot, useRecoilState } from 'recoil'
import { allNotificationsAtom, jobsAtom, messagingAtom, networkAtom, notificationAtom } from './store'

function App() {

  return (
    <>
      <RecoilRoot>
<br />
<br />
<br />
        <MainApp/>
      </RecoilRoot>
    </>
  )
}

function MainApp() {
  const networkCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  const messagingCount = useRecoilValue(messagingAtom)
  const [notificationCount, setNotificationCount] = useRecoilState(notificationAtom)
  const allNotificationsCount = useRecoilValue(allNotificationsAtom)
  return (
    <div>
      <button>home</button>

      <button>network({networkCount >= 100 ? '99+' : networkCount})</button>
      <button>jobs({jobsCount >= 100 ? '99+' : jobsCount})</button>
      <button>messaging({messagingCount >= 100 ? '99+' : messagingCount})</button>
      <button>notification({notificationCount >= 100 ? '99+' : notificationCount})</button>

      <button onClick={() => setNotificationCount(c => c+1)}>me ({allNotificationsCount})</button>
    </div>
  )
}

export default App
