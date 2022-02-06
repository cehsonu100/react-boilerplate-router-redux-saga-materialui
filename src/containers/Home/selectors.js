/** 
 * Improve React and Redux performance with Reselect
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.router;
const selectApp = state => state.App || initialState;

const selectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );
const selectLoading = () =>
  createSelector(
    selectApp,
    App => App.loading,
  );
const selectHelloValue = () =>
  createSelector(
    selectApp,
    App => App.helloValue,
  );

export {
  selectLocation,
  selectLoading,
  selectHelloValue
};
