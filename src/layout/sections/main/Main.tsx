import styled from "styled-components";
import photo from '../../../assets/images/garrett-parker-DlkF4-dbCOU-unsplash.webp'
import {FlexWrapper} from "../../../components/StyledComponents/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <TextBlock>
                        <SmallText>Hi There</SmallText>
                        <Name>Lorem <span>ipsum dolor</span></Name>
                        <MainTitle>Sed ut perspiciatis</MainTitle>
                    </TextBlock>
                    <PhotoWrapper>
                        <Photo src={photo} alt="photo"/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #e6dbdb;
    display: flex;
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    
    &::before {
        position: absolute;
        top: -24px;
        left: 24px;
        content: "";
        border: 5px solid ${theme.color.accent};
        width: 360px;
        height: 470px;
        z-index: -1;
    }
`

const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
`

const Name = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05em;
    margin: 10px 0;
    
    span {
        position: relative;
        z-index: 0;
        
        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.color.accent};
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
`

const SmallText = styled.span`
    font-weight: 400;
    font-size: 14px;
    text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`

const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

