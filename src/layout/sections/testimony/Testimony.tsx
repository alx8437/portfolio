import styled from "styled-components";
import {SectionTitle} from "../../../components/StyledComponents/SectionTitle.tsx";
import {Icon} from "../../../components/Icon/Icon.tsx";
import {Slider} from "../../../components/Slider/Slider.tsx";
import {FlexWrapper} from "../../../components/StyledComponents/FlexWrapper.tsx";
import {IconWrapper} from "../skills/Skill.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={'column'} align={'center'}>
                <IconWrapper>
                    <Icon iconId={'quote'}/>
                </IconWrapper>
                <Slider />
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
    
    
    ${IconWrapper} {
        margin: 30px 0 70px;
        
        &::before {
            left: 43%;
            top: 33%; 
        }
    }
`
