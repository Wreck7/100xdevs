import {atom, selector} from 'recoil';

export const networkAtom = atom({
    key: 'networkAtom',
    default: 107
})

export const jobsAtom = atom({
    key: 'jobsAtom',
    default: 0
})

export const messagingAtom = atom({
    key: 'messagingAtom',
    default: 0
})

export const notificationAtom = atom({
    key: 'notificationAtom',
    default: 13
})

export const allNotificationsAtom = selector({
    key: 'allNotificationsAtom',
    get: ({get}) => {
        const networkCount = get(networkAtom);
        const jobsCount = get(jobsAtom);
        const messagingCount = get(messagingAtom);
        const notificationCount = get(notificationAtom);

        return networkCount + jobsCount + messagingCount + notificationCount;
    }
})



