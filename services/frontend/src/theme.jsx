import { createTheme } from '@mui/material';


export const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#2196f3', // Main primary color for light theme
      },
      secondary: {
        main: '#f50057', // Main secondary color for light theme
      },
    },
    typography: {
      fontFamily: 'Belanosima, sans-serif', // Set the desired font for the light theme
    },
  });
  
  export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#2196f3', // Main primary color for dark theme
      },
      secondary: {
        main: '#f50057', // Main secondary color for dark theme
      },
    },
    typography: {
      fontFamily: 'Belanosima, sans-serif', // Set the desired font for the light theme
    },
  });