import { createSelector } from 'reselect';
import userReducer from './user.reducer';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
