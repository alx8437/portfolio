import styled from "styled-components";
import photo from '../../../assets/images/garrett-parker-DlkF4-dbCOU-unsplash.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <Name>Lorem ipsum dolor</Name>
                    <MainTitle>Sed ut perspiciatis</MainTitle>
                </div>

                <Photo src={photo} alt="photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #e6dbdb;
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const MainTitle = styled.h1`
    
`

const Name = styled.h2`
    
`

