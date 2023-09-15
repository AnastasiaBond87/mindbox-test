interface ITodo {
  id: string;
  body: string;
  completed: boolean;
}

type TListType = 'all' | 'completed' | 'active';

export type { ITodo, TListType };
