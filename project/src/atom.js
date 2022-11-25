import { atom } from "recoil";
import {recoilPersist} from 'recoil-persist';

export const isDarkAtom = atom({
    key:'isDark', //state이름(고유하다)
    default:false,
})

const {persistAtom} = recoilPersist({
    key:'toDoLocal',
    storage:localStorage,
})

export const toDoState = atom({
    key:'toDo',
    default:[],
    effects_UNSTABLE:[persistAtom]
})

export const categoryState = atom({
    key:'category',
    default:
})