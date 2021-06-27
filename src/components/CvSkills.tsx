import React from "react";
import styled from "styled-components";

import { OverlineText, Subtitle2, CaptionText, Subtitle1, Subtitle3 } from "../styles/Typography";
import { Spacer } from "../pages/cv";
import { colors } from "../utils/typography";

interface ISkillData {
  iconSrc: any;
  title: string;
  round?: boolean; 
  href: string;
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
    {skills.map((skill, idx) => (
      <div key={idx}>
        <CaptionText>{skill.title}</CaptionText>
        {skill.data.map((skillItem, idx) => (
          <Chip key={idx} href={skillItem.href} icon={skillItem.iconSrc} title={skillItem.title} round={skillItem.round} />
        ))}
        <Spacer mb={0.5} />
      </div>
    ))}
  </>
)

export default CvSkills;


const SkillChip = styled.span`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  height: 32px;
  margin: 4px;
  padding: 1px;
  transition: background-color 500ms;
  background-color: ${colors.backgroundColor};
  &:hover {
    background-color: ${colors.backgroundColor};
  }
`;

interface ISkillChipImgProps {
  round?: boolean;
}

const SkillChipImg = styled.img<ISkillChipImgProps>`
  height: 20px;
  margin: 0 -6px 0 6px;
  border-radius: ${({ round }) => round ? '50%' : 'none'}
`;

const SkillChipContent = styled.a` 
  font-size: 0.7rem;
  padding: 0 12px;
  box-shadow: none;
  -webkit-text-fill-color: white;
  text-decoration: none;
`;


const Chip = ({ icon, title, href, round = false }) => (
  <SkillChip>
    <SkillChipImg alt={title} src={icon} round={round} />
    <SkillChipContent href={href} target="_blank" rel='noreferrer'>
      {title}
    </SkillChipContent>
  </SkillChip>
)