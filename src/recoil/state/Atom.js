import { atom } from "recoil";
export const lengState = atom({
    key: 'lengState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});