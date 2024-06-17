import './App.css'
import { Container, IconButton}  from '@mui/material'
import { NoticiasProvider } from './context/NoticiasProvider'
import ListadoNoticias from './components/ListadoNoticias'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useState } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <NoticiasProvider>
              <IconButton
                sx={{ position: 'absolute', top: 5, right: 5 }}
                onClick={handleThemeToggle}
                color="inherit"
              >
                {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            <Container maxWidth="lg" sx={{ position: 'relative' }}>
              
              <ListadoNoticias />
            </Container>
          </NoticiasProvider>
        </ThemeProvider>
    </>
  )
}

export default App
