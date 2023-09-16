import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { ITodo, TListType } from '@/shared/types';

interface IState {
  todos: ITodo[];
  activeList: TListType;
  edited: string | null;
}

const initialState: IState = {
  todos: [],
  activeList: 'all',
  edited: null,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodo>) {
      state.todos = [...state.todos, action.payload];
    },
    setEditedTodo(state, action: PayloadAction<string | null>) {
      state.edited = action.payload;
    },
    editTodo(state, action: PayloadAction<Pick<ITodo, 'body'>>) {
      const { body } = action.payload;

      state.todos.map((todo) => {
        if (todo.id === state.edited) {
          todo.body = body;
        }

        return todo;
      });
    },
    deleteTodo(state, action: PayloadAction<Pick<ITodo, 'id'>>) {
      const { id } = action.payload;

      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    setTodoCompleted(state, action: PayloadAction<Pick<ITodo, 'id'>>) {
      const { id } = action.payload;

      state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      });
    },
    setActiveList(state, action: PayloadAction<TListType>) {
      state.activeList = action.payload;
    },
    deleteTodosCompleted(state) {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  setTodoCompleted,
  setActiveList,
  deleteTodosCompleted,
  editTodo,
  setEditedTodo,
} = todoSlice.actions;

export { todoSlice };
