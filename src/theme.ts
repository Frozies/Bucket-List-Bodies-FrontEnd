import {createTheme} from "@material-ui/core";

const theme = createTheme({
    palette: {
        primary: {
            light: '#80d6ff',
            main: '#42a5f4',
            dark: '#80d6ff',
            contrastText: '#000',
        },
        secondary: {
            light: '#98ee99',
            main: '#66bb6a',
            dark: '#338a3e' ,
            contrastText: '#000',
        }
    }
})

export default theme;