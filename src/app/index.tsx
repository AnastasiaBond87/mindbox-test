import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import BottomBar from '@/components/BottomBar';

function App() {
  return (
    <Container maxWidth="sm" sx={{ py: 3 }}>
      <Typography
        variant="h1"
        sx={{
          letterSpacing: 6,
          color: 'primary.main',
          textAlign: 'center',
          fontWeight: '100',
        }}
      >
        todos
      </Typography>
      <Grid container direction="column" sx={{ bgcolor: 'background.paper', boxShadow: 3 }}>
        <Grid item>
          <TodoInput />
          <Divider />
          <Box component="div" sx={{ minHeight: '163px' }}>
            <TodoList />
          </Box>
          <Divider />
          <BottomBar />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
