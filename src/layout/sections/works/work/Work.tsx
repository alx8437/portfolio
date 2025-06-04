import styled from "styled-components";


type WorkPropsType = {
    title: string
    src: string
    text: string
}

export const Work = (props: WorkPropsType) => {
    const {src, text, title} = props

    return (
        <StyledWork>
            <Image src={src} alt=''/>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Link href={'#'}>Demo</Link>
            <Link href={'#'}>Code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: #5b94a1;
    max-width: 540px;
    width: 100%;
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const Link = styled.a`
`
const Title = styled.h3`
`
const Text = styled.p`
`
