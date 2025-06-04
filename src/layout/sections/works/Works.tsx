import styled from "styled-components";
import {SectionTitle} from "../../../components/StyledComponents/SectionTitle.tsx";
import {Menu} from "../../../components/Menu/Menu.tsx";
import {FlexWrapper} from "../../../components/StyledComponents/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx";
import socialNetwork from '../../../assets/images/SocialNetwork.webp'
import timerImage from '../../../assets/images/Timer.webp'

export const Works = () => {
    const worksItems = ['ALL', 'LANDING PAGE', 'REACT', 'SPA']

    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems} />
            <FlexWrapper justify={'space-around'}>
                <Work
                    src={socialNetwork}
                    title={'Social Network'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'}
                />
                <Work
                    src={timerImage}
                    title={'Timer'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'}
                />
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #3e8a85;
`
