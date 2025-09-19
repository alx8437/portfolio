import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const SectionTitle = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 0.08em;
    text-align: center;
    margin-bottom: 90px;
    
    position: relative;
    
    &::before {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -30px;
        
        content: "";
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${theme.color.accent};
    }
`