import { createTheme, ThemeProvider } from '@mui/material/styles';
import Router from './routes/Router';
import opnToken from './theme.json';

function App() {
  const opnTheme = createTheme(opnToken);

  return (
    <ThemeProvider theme={opnTheme}>
      <Router />;
    </ThemeProvider>
  );
}

export default App;
