import 'styled-components'

interface ITheme {
    colors: IColors
}

interface IColors {
    background: {
        primary: string
        secondary: string
        tertiary: string
        quaternary: string
    }
    text: {
        primary: string
        secondary: string
        tertiary: string
        quaternary: string
        h1: string
    }
    error: string
    border: string
    hover: string
    scrollbarBG: string
    scrollbarFG: string
    accent: string
    button: {
        changeModeButton: {
            background: string
            button: string
        }
    }
    boxShadow: string
}

export const defaultTheme: ITheme = {
    colors: {
        background: {
            primary: '#fff',
            secondary: '#fcf7f7',
            tertiary: '#FF5454',
            quaternary: '#F7C3BC',
        },
        text: {
            primary: '#777777',
            secondary: '#ffffff',
            tertiary: '#cdcdcd',
            quaternary: '#F7C3BC',
            h1: '#444444',
        },
        error: '#FF5454',
        border: '#ededed',
        hover: '#999999',
        scrollbarBG: '#999999',
        scrollbarFG: '#cdcdcd',
        accent: '#F7C3BC',
        button: {
            changeModeButton: {
                background: '#cdcdcd',
                button: '#FFFFFF',
            },
        },
        boxShadow: '#c2dbea',
    },
}

export const darkTheme: ITheme = {
    colors: {
        background: {
            primary: '#1c2037',
            secondary: '#2c3258',
            tertiary: '#2f4177',
            quaternary: '#414e75',
        },
        text: {
            primary: '#ffffff',
            secondary: '#cdcdcd',
            tertiary: '#999999',
            quaternary: '#ffffff',
            h1: '#ffffff',
        },
        error: '#FF5454',
        border: 'transparent',
        hover: '#999999',
        scrollbarBG: '#999999',
        scrollbarFG: '#cdcdcd',
        accent: '#71D1EB',
        button: {
            changeModeButton: {
                background: '#cdcdcd',
                button: '#FFFFFF',
            },
        },
        boxShadow: '#cdcdcd',
    },
}
