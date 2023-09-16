import { ITodo } from '@/shared/types';

const getTodos = (): ITodo[] | null => {
  const todos = localStorage.getItem('PbAeB_todos');
  return todos ? JSON.parse(todos) : todos;
};

export { getTodos };
