import React from "react";
import styled from "styled-components";
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"


import linkedinIcon from '../../content/assets/linkedin-icon.svg'
import twitterIcon from '../../content/assets/twitter-icon.svg'
import githubIcon from '../../content/assets/github-icon.svg'
import jiraIcon from '../../content/assets/jira-icon.svg'
import webpackIcon from '../../content/assets/webpack-icon.svg'
import gitIcon from '../../content/assets/git-icon.svg'
import sentryIcon from '../../content/assets/sentry-icon.svg'
import stripeIcon from '../../content/assets/stripe-icon.svg'
import googleFirebaseIcon from '../../content/assets/google-firebase-icon.svg'
import gatsbyIcon from '../../content/assets/gatsby-icon.svg'
import jestIcon from '../../content/assets/jest-icon.svg'
import dateFnsIcon from '../../content/assets/date-fns-icon.svg'
import lodashIcon from '../../content/assets/lodash-icon.svg'
import draftjsIcon from '../../content/assets/draftjs-icon.svg'
import materialUiIcon from '../../content/assets/material-ui.svg'
import reduxIcon from '../../content/assets/redux-icon.svg'
import tailwindcssIcon from '../../content/assets/tailwindcss-icon.png'
import reactIcon from '../../content/assets/react-icon.svg'
import cssIcon from '../../content/assets/css-icon.png'
import javascriptIcon from '../../content/assets/javascript-icon.png'
import typescriptIcon from '../../content/assets/typescript-icon.png'
import htmlIcon from '../../content/assets/html-icon.png'
import fptsIcon from '../../content/assets/fp-ts-icon.png'
import enzymeIcon from '../../content/assets/enzyme-icon.png'
import amchartsIcon from '../../content/assets/amcharts-icon.svg'
import nextjsIcon from '../../content/assets/nextjs-icon.svg'
import styledComponentsIcon from '../../content/assets/styled-components.png'
import { Subtitle2, H2 } from "../styles/Typography";
import CvExperience from "../components/CvExperience";
import CvEducation from "../components/CvEducation";
import CvLanguages from "../components/CvLanguages";
import CvSkills from "../components/CvSkills";
import CvCommunityContribution from "../components/CvCommunityContribution";
import CvSocial from "../components/CvSocial";
import CvPersonal from "../components/CvPersonal";
import CvAboutMe from "../components/CvAboutMe";

const IMAGE_COMPONENT_STYLE = {
  marginRight: -6,
  marginLeft: 4,
  marginBottom: 0,
  borderRadius: `100%`,
};

const IMAGE_STYLE = {
  marginBottom: 0,
  borderRadius: `50%`,
  backgroundClip: "content-box,border-box",
  backgroundImage: "linear-gradient(#111,#111),linear-gradient(90deg,#ec6192,#ec4c34,#ffbd2b,#ebde56,#57c754,#53a1eb)",
  padding: "4px",
};

const CurriculumVitae = () => {


  const data = useStaticQuery(graphql`
  query CvQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)

  const userData = {
    name: 'Rinat',
    lastName: 'Rezyapov',
    title: 'Front-end Developer',
    aboutMe: `I enjoy working with the latest technologies in web development and helping businesses to create scalable and performant web applications`,
    experience: [
      {
        date: 'May 2019 - Present',
        company: { link: '', title: 'InCountry' },
        position: 'Senior Front-end Developer',
        description: ['Working on the main Portal product and other internal web applications at San Francisco based startup - InCountry', 'In my role as a senior front-end developer I introduced React Hooks API, TypeScript and Next.js to the existing Portal application', `In addition to web development I'm acting as front-end team lead for small team of front-end developers and designers`, `The duties  of this role includes requirements gathering, interaction with product  owner, short and mid-range project planning and estimation, daily  prioritization of work tasks for team members, reviewing and approving designs and preparing releases for deployment`],
        location: 'San Francisco, California (Remote)'
      },
      {
        date: 'Aug 2017 - May 2019',
        company: { link: '', title: 'OBVIDA' },
        position: 'Middle Front-end Developer',
        description: ['Worked remotely as a middle front-end developer in a distributed team (Russia, Australia)', 'Participated in development of an all-in-one CRM system functionality which includes form builder, marketing and business automation tools', 'Designed and implemented kanban and calendar for task management module utilizing such tools as react-beautiful-dnd and WebSocket push notifications', 'Improved web application (1000+ React components) performance and scalability by increasing number of reusable React components and introducing react-window in tables with a high volume of entries'],
        location: 'Pyrmont, Australia (Remote)'
      },
      {
        date: 'Jan 2016 - Aug 2017',
        company: { link: '', title: 'Bashneft-Inform' },
        position: 'Chief IT department specialist',
        description: ['Participated in the development of a Service Desk web application for incident management and automation support', 'Implemented ticket history module that enabled IT specialist to track the history of all the activities that have occurred to a ticket during its lifespan', 'Improved viewing experience of a web application by introducing responsive web design for mobile devices'],
        location: 'Ufa, Bashkortostan'
      }
    ],
    skills: [
      {
        title: 'Languages',
        data: [
          { iconSrc: javascriptIcon, title: 'JavaScript' },
          { iconSrc: typescriptIcon, title: 'TypeScript', round: true },
          { iconSrc: htmlIcon, title: 'HTML' },
          { iconSrc: cssIcon, title: 'CSS' },
        ]
      },
      {
        title: 'Libraries',
        data: [
          { iconSrc: reactIcon, title: 'react' },
          { iconSrc: reduxIcon, title: 'redux' },
          { iconSrc: materialUiIcon, title: 'material-ui' },
          { iconSrc: styledComponentsIcon, title: 'styled-components' },
          { iconSrc: tailwindcssIcon, title: 'tailwindcss' },
          { iconSrc: draftjsIcon, title: 'draftjs' },
          { iconSrc: lodashIcon, title: 'lodash' },
          { iconSrc: dateFnsIcon, title: 'date-fns' },
          { iconSrc: fptsIcon, title: 'fp-ts', round: true },
          { iconSrc: jestIcon, title: 'jest' },
          { iconSrc: enzymeIcon, title: 'enzyme' },
          { iconSrc: amchartsIcon, title: 'amcharts4' },
        ]
      },
      {
        title: 'Frameworks',
        data: [
          { iconSrc: reactIcon, title: 'react-native' },
          { iconSrc: nextjsIcon, title: 'nextjs' },
          { iconSrc: gatsbyIcon, title: 'gatsby' },
        ]
      },
      {
        title: 'Serverless',
        data: [
          { iconSrc: googleFirebaseIcon, title: 'Google Firebase' },
        ]
      },
      {
        title: 'Vendor specific',
        data: [
          { iconSrc: stripeIcon, title: 'Stripe' },
          { iconSrc: sentryIcon, title: 'Sentry' }
        ]
      },
      {
        title: 'Tools',
        data: [
          { iconSrc: gitIcon, title: 'git' },
          { iconSrc: webpackIcon, title: 'webpack' },
          { iconSrc: jiraIcon, title: 'jira' }
        ]
      }
    ],
    education: [
      {
        date: '2006 - 2011',
        university: 'Ufa State Aviation Technical University',
        degree: 'Banchelor of Science in Information Security'
      }
    ],
    languages: [
      { language: 'Russian', proficiency: 'native' },
      { language: 'English', proficiency: 'advanced' }
    ],
    contributions: [
      { date: '2019', project: 'Reactjs Official Documentation', description: 'Contributed into translation of official documentation into Russian' },
      { date: '2020', project: 'Gatsby Official Tutorial', description: 'Contributed into translation of official tutorial into Russian' }
    ],
    social: [
      { src: githubIcon, iconHeight: 30, href: 'https://github.com/RinatRezyapov' },
      { src: twitterIcon, iconHeight: 30, href: 'https://twitter.com/RinatRezyapov' },
      { src: linkedinIcon, iconHeight: 30, href: 'https://www.linkedin.com/in/rinatrezyapov' }
    ]
  }

  return (
    <Wrapper>
      <C1>
        <H2>{`${userData.name} ${userData.lastName}`}</H2>
        <Spacer mb={0.5} />
        <Subtitle2>{userData.title}</Subtitle2>
        <Spacer mb={2} />
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={'me'}
          style={IMAGE_COMPONENT_STYLE}
          imgStyle={IMAGE_STYLE}
        />
        <Spacer mb={2} />
        <CvAboutMe data={userData.aboutMe} />
        <Spacer mb={2} />
        <CvPersonal />
        <Spacer mb={2} />
        <CvSocial data={userData.social} />
      </C1>
      <C2>
        <CvExperience experience={userData.experience} />   
      </C2>
      <C2>
       <CvSkills skills={userData.skills} /> 
       <Spacer mb={2} />
        <CvEducation education={userData.education} />
        <Spacer mb={2} />
        <CvLanguages languages={userData.languages} />
        <Spacer mb={2} />
        <CvCommunityContribution contributions={userData.contributions} />    
      </C2>
    </Wrapper>
  )
}

export default CurriculumVitae;

interface ISpacerProps {
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
}

export const Spacer = styled.div<ISpacerProps>`
  margin-top: ${({ mt }) => mt ? mt + 'rem' : 0};
  margin-right: ${({ mr }) => mr ? mr + 'rem' : 0};
  margin-bottom: ${({ mb }) => mb ? mb + 'rem' : 0};
  margin-left: ${({ ml }) => ml ? ml + 'rem' : 0};
`;

const Wrapper = styled.div`
  font-family: Montserrat, sans-serif;
  width: 960px;
  margin: 0 auto;
  display: flex;
  @media (max-width: 1024px) {
    width: auto;
    flex-direction: column;
  }
`;

const C1 = styled.div`
  flex: 1;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
`;

const C2 = styled.div`
  flex: 1;
  padding: 3rem 1rem;
`;