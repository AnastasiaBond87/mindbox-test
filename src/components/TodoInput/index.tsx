import { v4 as uuidv4 } from 'uuid';
import { Box, TextField, styled } from '@mui/material';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import type { ITodo } from '@/shared/types';
import { useAppDispatch } from '@/app/store/hooks';
import { addTodo } from '@/app/store/slices/todoSlice';

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
  const [value, setValue] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    setValue(value.trim());
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    if (value) {
      const newTodo: ITodo = {
        id: uuidv4(),
        body: value,
        completed: false,
      };

      dispatch(addTodo(newTodo));
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
      />
    </Box>
  );
}
