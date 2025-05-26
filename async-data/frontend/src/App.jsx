
import './App.css'
import {RecoilRoot, useRecoilState, useRecoilValue} from 'recoil'
import React,{useEffect} from 'react'
import axios from 'axios'
import { totalNotifications, notifications } from './store'

function App() {

  return (
    <>
      <RecoilRoot>
        <MainApp/>
      </RecoilRoot>
    </>
  )
}

function MainApp(){
  const [notificationsCount, setNotificationsCount] = useRecoilState(notifications)
  const allNotificationsCount = useRecoilValue(totalNotifications)
  // useEffect(() => {
  //   axios.get('http://localhost:3000/notifications')
  //   .then(res => {
  //     setNotificationsCount(res.data)
  //   })
  // }, [])
  
  return(
    <div>
      <button>home</button>

      <button>network({notificationsCount.network >= 100 ? '99+' : notificationsCount.network})</button>
      <button>jobs({notificationsCount.jobs >= 100 ? '99+' : notificationsCount.jobs})</button>
      <button>messaging({notificationsCount.messaging >= 100 ? '99+' : notificationsCount.messaging})</button>
      <button>notification({notificationsCount.notifications >= 100 ? '99+' : notificationsCount.notifications})</button>

      <button>me ({allNotificationsCount})</button>
    </div>
  )
}

export default App
