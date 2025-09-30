import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";

type MenuPropsType = {
    menuItems: string[]
}

export const TabMenu = (props: MenuPropsType) => {
    const {menuItems} = props;

    return (
        <StyledTabMenu>
            <ul>
                {menuItems.map(item =>
                    <ListItem key={item}>
                        <Link href="#">{item}</Link>
                    </ListItem>)
                }
            </ul>
        </StyledTabMenu>
    )
};

const StyledTabMenu = styled.nav`
    margin-bottom: 40px;
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
`

const ListItem = styled.li`
    
`
