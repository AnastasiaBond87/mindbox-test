import { ITodo } from '@/shared/types';

const getTodos = (): ITodo[] => {
  const todos = localStorage.getItem('PbAeB_todos');
  return todos ? JSON.parse(todos) : [];
};

export { getTodos };
