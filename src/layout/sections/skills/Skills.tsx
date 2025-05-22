import styled from "styled-components";
import {FlexWrapper} from "../../../components/StyledComponents/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/StyledComponents/SectionTitle.tsx";
import {Skill} from "./Skill.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Skill
                    iconId={'code'}
                    title={'html5'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'}
                />
                <Skill
                    iconId={'css'}
                    title={'css3'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'}
                />
                <Skill
                    iconId={'react'}
                    title={'react'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'}
                />
                <Skill
                    iconId={'typescript'}
                    title={'typescript'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'}
                />
                <Skill
                    iconId={'styledComponents'}
                    title={'styled components'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'}
                />
                <Skill
                    iconId={'figma'}
                    title={'web design'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'}
                />
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #d0e488;
    min-height: 100vh;
`
