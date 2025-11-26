import styled from "styled-components";
import {SectionTitle} from "../../../components/StyledComponents/SectionTitle.tsx";
import {Button} from "../../../components/StyledComponents/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/StyledComponents/FlexWrapper.tsx";

export const Slogan = () => {
    return (
            <StyledSlogan>
                <Container>
                    <FlexWrapper direction={'column'} align={'center'}>
                        <SectionTitle>I Am Available For Freelance</SectionTitle>
                        <Button>Hire me</Button>
                    </FlexWrapper>
                </Container>
            </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
`
