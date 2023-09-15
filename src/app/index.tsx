import { Card, Container, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

function App() {
  return (
    <Container maxWidth="sm" sx={{ py: 3 }}>
      <Typography
        variant="h1"
        sx={{ letterSpacing: 6, color: 'primary.main', textAlign: 'center', fontWeight: '100' }}
      >
        todos
      </Typography>
      <Grid container direction="column" sx={{ bgcolor: grey[50], boxShadow: 3 }}></Grid>
    </Container>
  );
}

export default App;
