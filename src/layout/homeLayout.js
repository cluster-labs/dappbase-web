import React from 'react'
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";
import grey from "@material-ui/core/colors/grey";

const darkThemeDrawer = createMuiTheme({
    typography: {
        fontFamily: "\"Montserrat\", sans-serif",
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },
    palette: {
        type: "dark", // Switching the dark mode on is a single property value change.
        background: {
            paper: "#ffffff",
            default: "#262F3D"
        },
        primary: {
            light: '#6b61fc',
            main: '#6b61fc',
            dark: '#6b61fc',
            contrastText: '#fff',
        },
        secondary: {
            light: grey[200],
            main: grey[600],
            dark: grey[800],
            contrastText: '#fff',
        },
        text: {
            primary: grey[800],
            secondary: grey[600],
            disabled: grey[200],
            hint: grey[200],
        },
    }
});

export default function homeLayout(props) {
    return (
        <div>
            <ThemeProvider theme={darkThemeDrawer}>
                {props.children}
            </ThemeProvider>
        </div>
    )
}
