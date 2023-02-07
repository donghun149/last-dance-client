import {atom} from "recoil";

const idState = atom({
  key: 'idState',
  default: '',
})

const tokenState = atom({
  key: 'token',
  default: '',
})

export {idState, tokenState};