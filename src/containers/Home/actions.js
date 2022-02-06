import {
  INCREMENT_CURRENT_VALUE
} from './constants';



export function incrementCurrentValue(incrementalValue) {
  return {
    type: INCREMENT_CURRENT_VALUE,
    incrementalValue,
  };
}
