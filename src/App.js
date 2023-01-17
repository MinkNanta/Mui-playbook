import { createTheme, ThemeProvider } from '@mui/material/styles';
import AllComponents from './page/AllComponents';
import opnToken from "./theme.json"





function App() {
  
  const opnTheme = createTheme(opnToken);
  
  return (
    <ThemeProvider theme={opnTheme}>
      <AllComponents/>
    </ThemeProvider>
  );
}

export default App;




