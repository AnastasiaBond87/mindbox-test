import { Container, Grid, Typography } from '@mui/material';
import TodoInput from '@/components/TodoInput';

function App() {
  return (
    <Container maxWidth="sm" sx={{ py: 3 }}>
      <Typography
        variant="h1"
        sx={{ letterSpacing: 6, color: 'primary.main', textAlign: 'center', fontWeight: '100' }}
      >
        todos
      </Typography>
      <Grid container direction="column" sx={{ bgcolor: 'background.paper', boxShadow: 3 }}>
        <Grid item>
          <TodoInput />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
