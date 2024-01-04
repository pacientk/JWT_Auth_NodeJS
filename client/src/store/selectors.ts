import { RootState } from './store';

export const initStateSelector = (state: RootState) => state;
export const userSelector = (state: RootState) => state.userReducer;
