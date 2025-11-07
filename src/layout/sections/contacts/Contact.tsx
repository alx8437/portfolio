import styled from "styled-components";
import {SectionTitle} from "../../../components/StyledComponents/SectionTitle.tsx";
import {Button} from "../../../components/StyledComponents/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder={'Name'}/>
                    <Field placeholder={'Subject'}/>
                    <Field placeholder={'Message'} as={"textarea"}/>
                    <Button type={"submit"}>Send message</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    
`

const StyledForm = styled.form`
    margin: 0 auto;
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    
    textarea {
        height: 155px;
        resize: none;    
    }   
`

const Field = styled.input`
    width: 100%;
    font-family: 'Poppins', sans-serif;
    border: 1px solid ${theme.color.borderColor};
    background-color: ${theme.color.secondaryBg};
    padding: 7px 15px;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: ${theme.color.font};
    
    &::placeholder {
        color: ${theme.color.placeholderColor};
        text-transform: capitalize;
    }
    
    &:focus-visible {
        outline: 1px solid ${theme.color.borderColor};
    }
`
