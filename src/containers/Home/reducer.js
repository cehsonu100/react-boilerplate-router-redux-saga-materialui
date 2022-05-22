/**
 * In reducers We are going to use Immer lib.
 * When working with React, we maintain a lot of state. 
 * To make updates to our state, we need to write a lot of reducers. 
 * Manually writing reducers results in bloated code where we have to touch almost every part of our state. 
 * This is tedious and error-prone. 
 * So immer :) 
 */

import produce from 'immer';

import {
  INCREMENT_CURRENT_VALUE
} from './constants';


export const initialState = {
  helloValue: 1,
  loading: false,
};

const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch(action.type) {
      case INCREMENT_CURRENT_VALUE:
        draft.loading = true;
        draft.helloValue = state.helloValue + parseInt(action.incrementalValue);
        break;
      default:
        console.log(action.type + " is not defined");
        console.log("Action -> ", action);
        break;
    }
  });

export default appReducer;
