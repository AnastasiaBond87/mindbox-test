import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from '@/shared/types';

interface IState {
  todos: ITodo[];
}

const initialState: IState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodo>) {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo(state, action: PayloadAction<Pick<ITodo, 'id'>>) {
      const { id } = action.payload;

      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    setTodoCompleted(state, action: PayloadAction<Pick<ITodo, 'id'>>) {
      const { id } = action.payload;

      state.todos.map((el) => {
        if (el.id === id) {
          el.completed = !el.completed;
        }

        return el;
      });
    },
  },
});

export const { addTodo, deleteTodo, setTodoCompleted } = todoSlice.actions;
export { todoSlice };
