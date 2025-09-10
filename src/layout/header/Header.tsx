import styled from "styled-components";
import {Logo} from "../../components/Logo/Logo.tsx";
import {Menu} from "../../components/Menu/Menu.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/StyledComponents/FlexWrapper.tsx";

export const Header = () => {
    const menuItems = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

    return (
        <StyledHeader>
            <Container >
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <Menu menuItems={menuItems}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: green;
    display: flex;
    justify-content: space-between;
`
