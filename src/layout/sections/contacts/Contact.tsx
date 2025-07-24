import styled from "styled-components";
import {SectionTitle} from "../../../components/StyledComponents/SectionTitle.tsx";
import {Button} from "../../../components/StyledComponents/Button.tsx";

export const Contact = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Field placeholder={'Name'} />
                <Field placeholder={'Subject'} />
                <Field placeholder={'Message'} as={"textarea"} />
                <Button type={"submit"}>Send message</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50vh;
    background-color: #1f1f20;
`

const StyledForm = styled.form`
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Field = styled.input`

`
