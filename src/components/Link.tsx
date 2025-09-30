import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

export const Link = styled.a`
    padding: 10px;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    position: relative;
    z-index: 0;
    
    &:hover {
        &::before {
            height: 10px;
            content: "";
            display: inline-block;
            background-color: ${theme.color.accent};
            position:  absolute;
            bottom: 6px;
            left: 0;
            right: 0;
            z-index: -1;
        }
    }
`