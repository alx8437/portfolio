import styled from "styled-components";
import {Icon} from "../../components/Icon/Icon.tsx";
import {FlexWrapper} from "../../components/StyledComponents/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Aleksandr</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={"21"} height={"21"} viewBox={'0 0 21 21'} iconId={"instagram"} />
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon width={"21"} height={"21"} viewBox={'0 0 21 21'} iconId={"telegram"} />
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon width={"21"} height={"21"} viewBox={'0 0 21 21'} iconId={"vk"} />
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon width={"21"} height={"21"} viewBox={'0 0 21 21'} iconId={"likedin"} />
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <CopyRight>© 2025 Aleksandr Zelenskii, All Rights Reserved.</CopyRight>
            </FlexWrapper>
        </StyledFooter>
    );
};

const Name = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 0.14em;
`

const SocialItem = styled.li`
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`

const SocialLink = styled.a`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    color: ${theme.color.accent};
    
    &:hover {
        color: ${theme.color.primaryBg};
        transform: translateY(-4px);
    } 
`

const CopyRight = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`

const StyledFooter = styled.footer`
    background-color: ${theme.color.primaryBg};
    padding: 40px 0;
`
