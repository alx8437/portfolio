import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.ts";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.color.font};
        line-height: 1.2;
    }
    
    a {
        text-decoration: none;
        color: ${theme.color.font};
        cursor: pointer;
    }
    
    ul {
        list-style: none;
   }
    
    button {
        background-color: unset;
        border: none;
        color: ${theme.color.font};
        cursor: pointer;
    }
    
    section:nth-of-type(odd) {
        background-color: ${theme.color.primaryBg};
    }
    
    section:nth-of-type(even) {
        background-color: ${theme.color.secondaryBg};
    }
    
    section {
        padding: 100px 0;
    }
    
    h3 {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0.06em;
    }
    
    p {
        font-weight: 400;
        font-size: 14px;
    }
    
`