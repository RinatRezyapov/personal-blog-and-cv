import React from "react";
import styled from "styled-components";

import { OverlineText, Subtitle2, CaptionText, Body2, Subtitle1, Subtitle3 } from "../styles/Typography";
import { Spacer } from "../pages/cv";

interface ISkillData {
  iconSrc: any;
  title: string;
  round?: boolean; 
}

interface IUserSkillItem {
  title: string;
  data: ISkillData[];
}

interface IProps {
  skills: IUserSkillItem[];
}

const CvSkills: React.FunctionComponent<IProps> = ({ skills }) => (
  <>
    <OverlineText>Skills</OverlineText>
    <Spacer mb={1} />
    {skills.map((skill, idx) => (
      <div key={idx}>
        <Subtitle2>{skill.title}</Subtitle2>
        {skill.data.map((skillItem, idx) => (
          <Chip key={idx} icon={skillItem.iconSrc} title={skillItem.title} round={skillItem.round} />
        ))}
        <Spacer mb={0.5} />
      </div>
    ))}
  </>
)

export default CvSkills;


const SkillChip = styled.span`
  display: inline-flex;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 16px;
  height: 32px;
  margin: 4px;
`;

interface ISkillChipImgProps {
  round?: boolean;
}

const SkillChipImg = styled.img<ISkillChipImgProps>`
  height: 20px;
  margin: 0 -6px 0 6px;
  border-radius: ${({ round }) => round ? '50%' : 'none'}
`;

const SkillChipContent = styled.span` 
  font-size: 0.7rem;
  color: #1c0f43;  
  padding: 0 12px;
`;


const Chip = ({ icon, title, round = false }) => (
  <SkillChip>
    <SkillChipImg src={icon} round={round} />
    <SkillChipContent>
      {title}
    </SkillChipContent>
  </SkillChip>
)