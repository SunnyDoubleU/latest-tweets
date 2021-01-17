import { createGlobalStyle } from "styled-components/macro";

interface ITheme {
    colors: IColors;
}

interface IColors {
    background: string;
    text: string;
    hover: string;
    scrollbarBG: string;
    scrollbarFG: string;
    accent: string;
}

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
    html,body {
        height: 100%
    }
    
    * {
        box-sizing: border-box;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    body {
        font-family: 
        Microsoft Yahei,
        微软雅黑,
        Microsoft JhengHe,
        微软正黑体,
        Open Sans, 
        Sintony,
        黑体,
        SimHei,
        customicons,
        FontAwesome,
        sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        margin: 0;
        background: ${(props) => props.theme.colors.background};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        scrollbar-arrow-color: ${(props) => props.theme.colors.scrollbarBG};
        scrollbar-3dlight-color: ${(props) => props.theme.colors.scrollbarBG};
        scrollbar-highlight-color: ${(props) => props.theme.colors.scrollbarFG};
        scrollbar-face-color: ${(props) => props.theme.colors.scrollbarFG};
        scrollbar-shadow-color: ${(props) => props.theme.colors.scrollbarBG};
        scrollbar-track-color: ${(props) => props.theme.colors.scrollbarBG};
    }

    img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: ${(props) => props.theme.colors.text};
        transition: all 0.15s ease-in-out;
        
        -webkit-user-drag: none;

        &:hover {
            color: ${(props) => props.theme.colors.hover};
            text-decoration: none;

            svg path {
                fill: ${(props) => props.theme.colors.hover} !important;
            }
        }

        
    }

    button {
        outline: none;
        cursor: pointer;
    }

    input {
        font-size: 100%;
        outline: none;
        appearance: none;
        transition: all 0.15s ease-in-out;
        &:focus {
            border-color: ${(props) => props.theme.colors.accent};
            box-shadow: 0 0 4px 0 ${(props) => props.theme.colors.accent};
        }
    }
    
    ::-webkit-scrollbar-track {
        display: block;
        background-color: ${(props) => props.theme.colors.scrollbarBG};
    }

    ::-webkit-scrollbar {
        width: 0px;
        height: 4px;
    }

    ::-webkit-scrollbar-button {
	    width: 0px;
	    height: 0px;
    }

    ::-webkit-scrollbar-thumb {
	    border-radius: 50px;
	    box-shadow: inset 0 0 0 4px ${(props) => props.theme.colors.scrollbarFG};
	    border: 2px solid transparent;
    }


        }

        div {
            touch-action: manipulation;
        }

        ::-webkit-scrollbar {
            width: 0px;
            height: 4px;
        }
    

`;

export default GlobalStyle;
