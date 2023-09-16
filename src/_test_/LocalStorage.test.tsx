import { ITodo } from '@/shared/types';
import { getTodos } from '@/shared/utils';

const todos: ITodo[] = [
  {
    id: '1',
    body: 'test1',
    completed: true,
  },
  {
    id: '2',
    body: 'test2',
    completed: false,
  },
];

const LS_TODOS_KEY = 'PbAeB_todos';

describe('test LS utils', () => {
  test('test get todos from LS', () => {
    localStorage.setItem(LS_TODOS_KEY, JSON.stringify(todos));

    expect(getTodos()).toStrictEqual(todos);
  });

  test('test get empty todos', () => {
    localStorage.clear();
    expect(getTodos()).toStrictEqual([]);
  });
});
