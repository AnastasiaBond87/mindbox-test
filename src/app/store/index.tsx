import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { todoSlice } from '@/app/store/slices/todoSlice';
import { todoInputSlice } from '@/app/store/slices/todoInputSlice';

const reducer = combineReducers({
  [todoSlice.name]: todoSlice.reducer,
  [todoInputSlice.name]: todoInputSlice.reducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
