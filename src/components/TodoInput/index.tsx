import { TextField, styled } from '@mui/material';

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
  return (
    <StyledTextField
      placeholder="What need to be done?"
      fullWidth
      autoComplete="off"
      size="medium"
    />
  );
}
