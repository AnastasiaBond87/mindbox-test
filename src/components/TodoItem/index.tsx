import { ListItem, Checkbox, SvgIcon, Typography } from '@mui/material';
import { ReactComponent as CheckboxIcon } from '@/assets/icons/checkbox-blank-icon.svg';
import { ReactComponent as CheckboxCheckedIcon } from '@/assets/icons/checkbox-checked-icon.svg';
import { ITodo } from '@/shared/types';
import { useAppDispatch } from '@/app/store/hooks';
import { setTodoCompleted } from '@/app/store/slices/todoSlice';

interface IProps {
  todo: ITodo;
}

export default function TodoItem({ todo }: IProps) {
  const dispatch = useAppDispatch();
  const { id, completed, body } = todo;

  const handleClick = (id: string): void => {
    dispatch(setTodoCompleted({ id }));
  };

  return (
    <ListItem
      onClick={() => handleClick(id)}
      sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 1 }}
    >
      <Checkbox
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
      <Typography
        variant="body1"
        sx={{
          textDecoration: completed ? 'line-through' : 'none',
          lineHeight: 2,
          color: completed ? 'secondary.main' : 'inherit',
        }}
      >
        {body}
      </Typography>
    </ListItem>
  );
}
