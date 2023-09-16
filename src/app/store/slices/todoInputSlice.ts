import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IState {
  value: string;
}

const initialState: IState = {
  value: '',
};

const todoInputSlice = createSlice({
  name: 'todoInput',
  initialState,
  reducers: {
    setInputValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { setInputValue } = todoInputSlice.actions;
export { todoInputSlice };
