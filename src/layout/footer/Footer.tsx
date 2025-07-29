import styled from "styled-components";
import {Icon} from "../../components/Icon/Icon.tsx";
import {FlexWrapper} from "../../components/StyledComponents/FlexWrapper.tsx";

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
`

const SocialItem = styled.li`
`

const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`

const SocialLink = styled.a`
`

const CopyRight = styled.small`
`

const StyledFooter = styled.footer`
    background-color: #b796cf;
    min-height: 20vh;
`
