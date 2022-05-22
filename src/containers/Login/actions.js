import {
  SET_USER_NAME,
  GET_USER_NAME
} from './constants';

export function getUserName() {
  return {
    type: GET_USER_NAME,
  };
}

export function setUserName(name) {
  return {
    type: SET_USER_NAME,
    name,
  };
}
