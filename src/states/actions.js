import base  from '../api/base';
import callApi from '../api/callApi';

const devsRef = base.database().ref('devs');
/*
 * action types
 */

export const ADD_DEV = 'ADD_DEV'
export const UPDATE_DEV = 'UPDATE_DEV'
export const REMOVE_DEV = 'REMOVE_DEV'
export const LOAD_DEVS = 'LOAD_DEVS'
export const REQUEST_DEVS = 'REQUEST_DEVS'
export const RECEIVE_DEVS = 'RECEIVE_DEVS'
export const TOGGLE_ADD_DEV = 'TOGGLE_ADD_DEV';
export const TOGGLE_EDIT_DEV = 'TOGGLE_EDIT_DEV';

// Export Actions

export function fetchDevs() {
  return (dispatch) => {
    return callApi('devs').then(res => {
      dispatch(receiveDevs(res.devs));
    });
  };
}

export function toggleAddDev() {
  return {
    type: TOGGLE_ADD_DEV,
  };
}
export function toggleEditDev(id) {
  return {
    type: TOGGLE_EDIT_DEV,id
  };
}


export function loadDevs() {
  return dispatch =>{
    devsRef.on('value', (snapshot) =>dispatch(receiveDevs(snapshot.val())))
  }  
  }

export function addDev(dev) {
  return { type: ADD_DEV, dev }
}
export function updateDev(dev) {
  return { type: UPDATE_DEV, dev }
}
export function removeDev(index) {
  return { type: REMOVE_DEV, index }
}

export function requestDevs() {
  return {
    type: REQUEST_DEVS

  }
} 
export function receiveDevs(devs) {
  return {type: RECEIVE_DEVS,devs }
} 