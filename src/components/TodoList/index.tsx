import { Divider, List } from '@mui/material';
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

  useEffect(() => {
    filterTodos();
  }, [filterTodos]);

  if (!items.length) return null;

  return (
    <List sx={{ p: 0 }}>
      {items.map((todo, idx) => (
        <>
          <TodoItem todo={todo} key={todo.id} />
          {idx !== todos.length - 1 && <Divider />}
        </>
      ))}
    </List>
  );
}
