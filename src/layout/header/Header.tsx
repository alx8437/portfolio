import styled from "styled-components";
import {Logo} from "../../components/Logo/Logo.tsx";
import {Menu} from "../../components/Menu/Menu.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu />
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: green;
    display: flex;
    justify-content: space-between;
`
