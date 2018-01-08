//import base  from '../api/base';
import callApi from '../api/callApi';
//import { error } from 'util';

//const devsRef = base.database().ref('devs');
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
export const FAILED_ASYNC = 'FAILED_ASYNC';

// Export Actions
//async calls
// get all devs 
export function fetchDevs(dev) {
  return (dispatch) => {
    return callApi('devs')
    .then(res => {dispatch(receiveDevs(res.devs))
    .catch(err =>{dispatch(failedAsync(err))})  
    });
  };
}
//create a dev
export function persistAddDev(dev) {
  return (dispatch) => {
    return callApi('devs','post',dev)
    .then(res => { dispatch(addDev(res.dev))
    .catch(err =>{dispatch(failedAsync(err))})
    })
  }
}
//Delete a dev 

export function persistdeleteDev(id) {
  return (dispatch) => {
    return callApi('devs','delete',id)
          .then(res => {  dispatch(removeDev(id))})
          .catch(err =>{dispatch(failedAsync(err))})
  }}
//Update a dev 
export function persistUpdateDev(dev) {
  return (dispatch) => {
    return callApi(`devs/${dev.id}`,'post',dev)
          .then(res => {  dispatch(removeDev(id))})
          .catch(err =>{dispatch(failedAsync(err))})
  }}

//sync calls 
export function failedAsync(err){
  return {
    type:FAILED_ASYNC,
    err
  }
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


/*export function loadDevs() {
  return dispatch =>{
    devsRef.on('value', (snapshot) =>dispatch(receiveDevs(snapshot.val())))
  }  
  }*/

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