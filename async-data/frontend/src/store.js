import {atom, selector} from 'recoil';

export const notifications = atom({
    key: 'notifications',
    default:{
        network: 5,
        jobs: 3,
        messaging: 2,
        notifications: 11
    }
})

export const totalNotifications = selector({
    key: 'allNotificationsCount',
    get: ({get}) => {
        const n = get(notifications);
        return n.network + n.jobs + n.messaging + n.notifications;
    }
})