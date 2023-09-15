import { ListItem, Checkbox, SvgIcon, Typography, Box, FormLabel, IconButton } from '@mui/material';
import { ReactComponent as CheckboxIcon } from '@/assets/icons/checkbox-blank-icon.svg';
import { ReactComponent as CheckboxCheckedIcon } from '@/assets/icons/checkbox-checked-icon.svg';
import { ReactComponent as TrashIcon } from '@/assets/icons/trash-icon.svg';
import { ITodo } from '@/shared/types';
import { useAppDispatch } from '@/app/store/hooks';
import { deleteTodo, setTodoCompleted } from '@/app/store/slices/todoSlice';

interface IProps {
  todo: ITodo;
}

export default function TodoItem({ todo }: IProps) {
  const dispatch = useAppDispatch();
  const { id, completed, body } = todo;

  const checkTodo = (id: string): void => {
    dispatch(setTodoCompleted({ id }));
  };

  const removeTodo = (id: string): void => {
    dispatch(deleteTodo({ id }));
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
        component="div"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Checkbox
          id={id}
          onClick={() => checkTodo(id)}
          disableRipple
          icon={
            <SvgIcon fontSize="medium" inheritViewBox color="secondary">
              <CheckboxIcon />
            </SvgIcon>
          }
          checkedIcon={
            <SvgIcon fontSize="medium" inheritViewBox>
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
            }}
          >
            {body}
          </Typography>
        </FormLabel>
      </Box>
      <Box component="div">
        <IconButton onClick={() => removeTodo(id)}>
          <SvgIcon>
            <TrashIcon />
          </SvgIcon>
        </IconButton>
      </Box>
    </ListItem>
  );
}
