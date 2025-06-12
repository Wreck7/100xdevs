import axios from 'axios';
import {atom, selector} from 'recoil';

export const notifications = atom({
    key: 'notifications',
    default: selector({
        key: 'notificationsAtomSelector',
        get: async () =>{
            // await new Promise(r=> setTimeout(r,3000))  // uncomment this line to simulate a delay to see what renders first
            const res = await axios.get('http://localhost:3000/notifications')
            return res.data;
        }
    })
    // default:{
    //     network: 5,
    //     jobs: 3,
    //     messaging: 2,
    //     notifications: 11
    // }
})

export const totalNotifications = selector({
    key: 'allNotificationsCount',
    get: ({get}) => {
        const n = get(notifications);
        return n.network + n.jobs + n.messaging + n.notifications;
    }
})