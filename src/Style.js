import { createTheme } from "@mui/material";

const colors = {
    primary: '#F0EFEA',
    secondary: '#746653',
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
            contrastText: colors.black
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