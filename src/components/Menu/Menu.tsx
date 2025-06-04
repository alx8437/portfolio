import styled from "styled-components";

type MenuPropsType = {
    menuItems: string[]
}

export const Menu = (props: MenuPropsType) => {
    const {menuItems} = props;

    return (
        <StyledMenu>
            <ul>
                {menuItems.map(item =>
                    <li key={item}>
                        <a href="">{item}</a>
                    </li>)
                }
            </ul>
        </StyledMenu>
    )
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`
