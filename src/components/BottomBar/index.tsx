import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { Button, Grid, List, ListItem, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { setActiveList } from '@/app/store/slices/todoSlice';
import { TListType } from '@/shared/types';

const btnList: TListType[] = ['all', 'active', 'completed'];

export default function BottomBar() {
  const dispatch = useAppDispatch();
  const { todos, activeList } = useAppSelector((store) => store.todo);
  const [uncompleted, setUncompleted] = useState<number>(0);

  const getUncompleted = useCallback((): void => {
    const items = todos.filter(({ completed }) => !completed).length;
    setUncompleted(items);
  }, [todos]);

  useEffect(() => {
    getUncompleted();
  }, [getUncompleted]);

  return (
    <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
      <Grid item>
        <Typography>{`${uncompleted} item${uncompleted === 1 ? '' : 's'} left`}</Typography>
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
                sx={{
                  outlineColor: 'primary',
                  outlineStyle: 'solid',
                  outlineWidth: btn === activeList ? '1px' : '0px',
                }}
                onClick={() => dispatch(setActiveList(btn))}
              >
                {btn}
              </Button>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
