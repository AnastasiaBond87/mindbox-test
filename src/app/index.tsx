import { Box, Container, Typography } from '@mui/material';
import TodoAccordion from '@/components/TodoAccordion';

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
      <Box sx={{ bgcolor: 'background.paper', boxShadow: 3 }}>
        <TodoAccordion />
      </Box>
    </Container>
  );
}

export default App;
