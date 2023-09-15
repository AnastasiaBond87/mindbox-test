import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './slices/todoSlice';

const reducer = combineReducers({
  [todoSlice.name]: todoSlice.reducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };


