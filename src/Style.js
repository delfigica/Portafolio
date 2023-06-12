import { createTheme } from "@mui/material";

const colors = {
    primary: 'rgb(74, 39, 98)',
    secondary: 'rgb(243, 183, 177)',
    lightGrey: '#CABFB3',
    black: '#26261F',
    white: '#F0EFEA'
}

export const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
    palette: {
        primary: {
            main: colors.primary,
            contrastText: colors.white
        },
        secondary: {
            main: colors.secondary,
            contrastText: colors.white
        },
        lightGrey: {
            main: colors.lightGrey
        },
        info: {
            main: colors.black,
            contrastText: colors.white,
        },
        black: {
            main: colors.black,
            contrastText: colors.primary
        },
        white: {
            main: colors.white
        }
    }

})