import { List } from '@mui/material';
import type { ITodo } from '@/shared/types';
import { useAppSelector } from '@/app/store/hooks';
import { useCallback, useEffect, useState } from 'react';
import TodoItem from '../TodoItem';

export default function TodoList() {
  const { todos, activeList: type } = useAppSelector((store) => store.todo);
  const [items, setItems] = useState<ITodo[]>(todos);

  const filterTodos = useCallback((): void => {
    if (type === 'active') {
      setItems(todos.filter(({ completed }) => !completed));
    } else if (type === 'completed') {
      setItems(todos.filter(({ completed }) => completed));
    } else {
      setItems(todos);
    }
  }, [type, todos]);

  const setTodos = useCallback((): void => {
    localStorage.setItem('PbAeB_todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    filterTodos();
  }, [filterTodos]);

  useEffect(() => {
    window.addEventListener('beforeunload', setTodos);

    return () => {
      window.removeEventListener('beforeunload', setTodos);
    };
  }, [setTodos]);

  if (!items.length) return null;

  return (
    <List sx={{ p: 0 }} data-testid="todo-list">
      {items.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </List>
  );
}
