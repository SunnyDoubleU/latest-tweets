import React, { Suspense } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { defaultTheme, darkTheme } from '../styles/themes'
import Home from '../pages/index'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { useState } from 'react'
import GlobalStyle from '../styles/globalStyle'
import ThemeButton from '../components/themeButton/index'
import AppRouter from './router'
import AppLoading from './loading'

const SHeader = styled.div`
    color: ${(props) => props.theme.colors.text};
    font-size: 30px;
`
const SThemeButtonContainer = styled.div`
    padding: 4px;
    background: ${props => props.theme.colors.background.tertiary}
`
export type ThemeType = typeof defaultTheme

const App: React.FC = () => {
    const [theme, setTheme] = useState(defaultTheme)
    const [isDefaultTheme, setIsDefaultTheme] = useState(true)
    const toggleHandler = () => {
        setIsDefaultTheme(!isDefaultTheme)
        if (isDefaultTheme) {
            setTheme(darkTheme)
        } else {
            setTheme(defaultTheme)
        }
    }
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <SThemeButtonContainer>
                <ThemeButton toggleHandler={toggleHandler} isDefaultTheme={isDefaultTheme} />
            </SThemeButtonContainer>
            <Router>
                {/* <SHeader>Thanks Boss</SHeader> */}
                <Suspense fallback={<AppLoading />}>
                    <AppRouter />
                    {/* <AppLoading /> */}
                </Suspense>
            </Router>
        </ThemeProvider>
    )
}

export default App
