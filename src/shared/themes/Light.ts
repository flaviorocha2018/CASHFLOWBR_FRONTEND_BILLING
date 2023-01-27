import { createTheme } from '@mui/material';
import { blue, cyan, green, red } from '@mui/material/colors';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: blue[800],
            dark: blue[900],
            light: blue[500],
            contrastText: '#ffffff',
        },
        secondary: {
            main: cyan[800],
            dark: cyan[900],
            light: cyan[500],
            contrastText: '#ffffff',
        },

        error: {
            main: red[800],
            dark: red[900],
            light: red[400],
            contrastText: '#ffffff',
        },

        success: {
            main: green[800],
            dark: green[900],
            light: green[500],
            contrastText: '#ffffff',

        },

        background: {
            default: '#f7f6f3',
            paper: '#ffffff',

        },

    }
});
