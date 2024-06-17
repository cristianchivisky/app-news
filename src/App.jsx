import './App.css'
import { Container, IconButton}  from '@mui/material'
import { NoticiasProvider } from './context/NoticiasProvider'
import ListadoNoticias from './components/ListadoNoticias'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useState } from 'react';

// Define el tema oscuro
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// Define el tema claro
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Alterna el tema entre oscuro y claro
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}> {/* Provee el tema seleccionado */}
        <CssBaseline /> {/* Normaliza los estilos del navegador */}
        <NoticiasProvider> {/* Proveedor del contexto de noticias */}
          <IconButton
            sx={{ position: 'absolute', top: 5, right: 5 }}
            onClick={handleThemeToggle}
            color="inherit"
          >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />} {/* Icono según el tema */}
          </IconButton>
          <Container maxWidth="lg" sx={{ position: 'relative' }}>
            <ListadoNoticias /> {/* Componente que lista las noticias */}
          </Container>
        </NoticiasProvider>
      </ThemeProvider>
    </>
  )
}

export default App
