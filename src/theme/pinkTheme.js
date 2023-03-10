import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const pinkTheme = createTheme({
    palette: {
        primary: {
            main: '#f50057'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        }
    }
})