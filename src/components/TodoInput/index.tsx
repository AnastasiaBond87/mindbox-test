import { v4 as uuidv4 } from 'uuid';
import { Box, IconButton, InputAdornment, SvgIcon, TextField, styled } from '@mui/material';
import { ReactComponent as ClearIcon } from '@/assets/icons/clear-icon.svg';
import { ChangeEventHandler, FormEventHandler } from 'react';
import type { ITodo } from '@/shared/types';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { addTodo, editTodo, setEditedTodo } from '@/app/store/slices/todoSlice';
import { setInputValue } from '@/app/store/slices/todoInputSlice';

const StyledTextField = styled(TextField)({
  '& ::placeholder': {
    fontStyle: 'italic',
  },
  '& fieldset': {
    border: 'none',
  },
  '&.Mui-focused fieldset': {
    border: 'none',
  },
});

export default function TodoInput() {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((store) => store.todoInput);
  const { edited } = useAppSelector((store) => store.todo);

  const clearInput = (): void => {
    dispatch(setInputValue(''));
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    dispatch(setInputValue(value));
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    const currValue = value.trim();

    if (currValue) {
      if (edited) {
        dispatch(editTodo({ body: currValue }));
        dispatch(setEditedTodo(null));
      } else {
        const newTodo: ITodo = {
          id: uuidv4(),
          body: currValue,
          completed: false,
        };

        dispatch(addTodo(newTodo));
      }

      clearInput();
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <StyledTextField
        placeholder="What need to be done?"
        fullWidth
        autoComplete="off"
        size="medium"
        value={value}
        onChange={handleChange}
        InputProps={{
          endAdornment: value && (
            <InputAdornment position="end">
              <IconButton onClick={clearInput}>
                <SvgIcon fontSize="medium" inheritViewBox color="secondary">
                  <ClearIcon />
                </SvgIcon>
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
