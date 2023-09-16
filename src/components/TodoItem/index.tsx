import { ListItem, Checkbox, SvgIcon, Typography, Box, FormLabel, IconButton } from '@mui/material';
import { ReactComponent as CheckboxIcon } from '@/assets/icons/checkbox-blank-icon.svg';
import { ReactComponent as CheckboxCheckedIcon } from '@/assets/icons/checkbox-checked-icon.svg';
import { ReactComponent as TrashIcon } from '@/assets/icons/trash-icon.svg';
import { ReactComponent as PencilIcon } from '@/assets/icons/pencil-icon.svg';
import { ITodo } from '@/shared/types';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { deleteTodo, setTodoCompleted, setEditedTodo } from '@/app/store/slices/todoSlice';
import { setInputValue } from '@/app/store/slices/todoInputSlice';

interface IProps {
  todo: ITodo;
}

export default function TodoItem({ todo }: IProps) {
  const dispatch = useAppDispatch();
  const { edited } = useAppSelector((store) => store.todo);
  const { id, completed, body } = todo;

  const checkTodo = (): void => {
    dispatch(setTodoCompleted({ id }));
  };

  const removeTodo = (): void => {
    dispatch(deleteTodo({ id }));
  };

  const setEditTodo = (): void => {
    if (edited === id) {
      dispatch(setEditedTodo(null));
      dispatch(setInputValue(''));
    } else {
      dispatch(setInputValue(body));
      dispatch(setEditedTodo(id));
    }
  };

  return (
    <ListItem
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Checkbox
          id={id}
          onClick={checkTodo}
          disableRipple
          icon={
            <SvgIcon inheritViewBox color="secondary">
              <CheckboxIcon />
            </SvgIcon>
          }
          checkedIcon={
            <SvgIcon inheritViewBox color="success">
              <CheckboxCheckedIcon />
            </SvgIcon>
          }
          checked={completed}
          sx={{ p: 0 }}
        />
        <FormLabel htmlFor={id}>
          <Typography
            variant="body1"
            sx={{
              cursor: 'pointer',
              textDecoration: completed ? 'line-through' : 'none',
              lineHeight: 2,
              color: completed ? 'secondary.main' : 'inherit',
              maxWidth: '100%',
              whiteSpace: 'normal',
            }}
          >
            {body}
          </Typography>
        </FormLabel>
      </Box>
      <Box>
        <IconButton disableRipple onClick={removeTodo} disabled={edited === id}>
          <SvgIcon>
            <TrashIcon />
          </SvgIcon>
        </IconButton>
        <IconButton disableRipple>
          <SvgIcon color={edited === id ? 'success' : 'primary'} onClick={setEditTodo}>
            <PencilIcon />
          </SvgIcon>
        </IconButton>
      </Box>
    </ListItem>
  );
}
