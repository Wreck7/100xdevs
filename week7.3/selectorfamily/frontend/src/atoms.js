import { atomFamily, selectorFamily } from "recoil";
import axios from 'axios';



export const todoAtomFamily = atomFamily({
    key: 'todoAtomFamily',
    default: selectorFamily({
        key: 'todoSelectorFamily',
        get: (id) => async () => {
            // await new Promise(r => setTimeout(r, 3000)) /// uncomment this line to simulate a delay to check useRecoilValueLoadable useRecoilStareLoadable
            const res = await axios.get(`http://localhost:3000/todo?id=${id}`)
            return res.data.todo
        }
    })
})