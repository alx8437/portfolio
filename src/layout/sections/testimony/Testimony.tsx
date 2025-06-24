import styled from "styled-components";
import {SectionTitle} from "../../../components/StyledComponents/SectionTitle.tsx";
import {Icon} from "../../../components/Icon/Icon.tsx";
import {Slider} from "../../../components/Slider/Slider.tsx";
import {FlexWrapper} from "../../../components/StyledComponents/FlexWrapper.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={'column'} align={'center'}>
                <Icon iconId={'quote'}/>
                <Slider />
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: #c1a1df;
    min-height: 50vh;
`
