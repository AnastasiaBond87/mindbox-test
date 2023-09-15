import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { Button, Grid, List, ListItem, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { deleteTodosCompleted, setActiveList } from '@/app/store/slices/todoSlice';
import { TListType } from '@/shared/types';

const btnList: TListType[] = ['all', 'active', 'completed'];

export default function BottomBar() {
  const dispatch = useAppDispatch();
  const { todos, activeList } = useAppSelector((store) => store.todo);
  const [totalUncompleted, setTotalUncompleted] = useState<number>(0);

  const clearCompleted = (): void => {
    dispatch(deleteTodosCompleted());
  };

  const setListType = (type: TListType) => {
    dispatch(setActiveList(type));
  };

  const getTotalUncompleted = useCallback((): void => {
    const items = todos.filter(({ completed }) => !completed).length;
    setTotalUncompleted(items);
  }, [todos]);

  useEffect(() => {
    getTotalUncompleted();
  }, [getTotalUncompleted]);

  return (
    <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
      <Grid item>
        <Typography>{`${totalUncompleted} item${
          totalUncompleted === 1 ? '' : 's'
        } left`}</Typography>
      </Grid>
      <Grid item>
        <List sx={{ display: 'flex', gap: 1 }}>
          {btnList.map((btn) => (
            <ListItem
              key={btn}
              sx={{
                p: 0,
              }}
            >
              <Button
                size="small"
                sx={{
                  outlineColor: 'primary',
                  outlineStyle: 'solid',
                  outlineWidth: btn === activeList ? '1px' : '0px',
                }}
                onClick={() => setListType(btn)}
              >
                {btn}
              </Button>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Button size="small" color="inherit" onClick={clearCompleted}>
        Clear completed
      </Button>
    </Grid>
  );
}
