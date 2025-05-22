import {Icon} from "../../../components/Icon/Icon.tsx";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    const {title, iconId, description} = props

    return (
        <StyledSkill>
            <Icon iconId={iconId}/>
            <SkillTitle>{title}</SkillTitle>
            <SkillText>
                {description}
            </SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 30%;
    background-color: #aecc96;
    margin: 10px;
`

const SkillTitle = styled.h3`
    
`

const SkillText = styled.p`
    
`
