import React from "react";
import styled from "styled-components";
import Image from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"


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
import tailwindcssIcon from '../../content/assets/tailwindcss-icon.svg'
import reactIcon from '../../content/assets/react-icon.svg'
import cssIcon from '../../content/assets/css-icon.svg'
import javascriptIcon from '../../content/assets/javascript-icon.svg'
import typescriptIcon from '../../content/assets/typescript-icon.svg'
import htmlIcon from '../../content/assets/html-icon.svg'
import fptsIcon from '../../content/assets/fp-ts-icon.svg'
import enzymeIcon from '../../content/assets/enzyme-icon.svg'
import amchartsIcon from '../../content/assets/amcharts-icon.svg'
import nextjsIcon from '../../content/assets/nextjs-icon.svg'
import backArrowIcon from '../../content/assets/back-arrow.svg'
import styledComponentsIcon from '../../content/assets/styled-components-icon.svg'
import PdfIcon from '../../content/assets/pdf.svg'
import { Subtitle2, Title, gradientMixin } from "../styles/Typography";
import CvExperience from "../components/CvExperience";
import CvEducation from "../components/CvEducation";
import CvLanguages from "../components/CvLanguages";
import CvSkills from "../components/CvSkills";
import CvCommunityContribution from "../components/CvCommunityContribution";
import CvSocial from "../components/CvSocial";
import CvPersonal from "../components/CvPersonal";
import CvAboutMe from "../components/CvAboutMe";
import CvPdf from '../../static/rinat-rezyapov-cv.pdf';
import SEO from "../components/seo";

const IMAGE_COMPONENT_STYLE = {
  marginRight: -6,
  marginLeft: 4,
  marginBottom: 0,
  borderRadius: `100%`,
  minWidth: 150,
  minHeight: 150,
};

const IMAGE_STYLE = {
  marginBottom: 0,
  borderRadius: `50%`,
  border: '2px solid white'
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
    site {
      siteMetadata {
        author {
          name
          summary
        }
      }
    }
  }
`)

  const userData = {
    name: data.site.siteMetadata.author.name.split(' ')[0],
    lastName: data.site.siteMetadata.author.name.split(' ')[1],
    title: 'Front-end Developer',
    aboutMe: data.site.siteMetadata.author.summary,
    experience: [
      {
        date: 'May 2019 - Present',
        company: { link: '', title: 'InCountry' },
        position: 'Senior Front-end Developer',
        description: ['Working on the main Portal product and other internal web applications at San Francisco based startup - InCountry;', 'In my role as a senior front-end developer I introduced React Hooks API, TypeScript and Next.js to the existing Portal application;', `In addition to web development I'm acting as a Team Lead for small team of front-end developers and designers;`, `The duties  of this role includes requirements gathering, interaction with product  owner, short and mid-range project planning and estimation, daily  prioritization of work tasks for team members, reviewing and approving designs and preparing releases for deployment;`],
        location: 'San Francisco, California (Remote)'
      },
      {
        date: 'Aug 2017 - May 2019',
        company: { link: '', title: 'OBVIDA' },
        position: 'Middle Front-end Developer',
        description: ['Worked remotely as a middle front-end developer in a distributed team (Russia, Australia);', 'Participated in development of an all-in-one CRM system functionality which includes form builder, marketing and business automation tools;', 'Designed and implemented kanban and calendar for task management module utilizing such tools as react-beautiful-dnd and WebSocket push notifications;', 'Improved web application (1000+ React components) performance and scalability by increasing number of reusable React components and introducing react-window in tables with a high volume of entries;'],
        location: 'Pyrmont, Australia (Remote)'
      },
      {
        date: 'Jan 2016 - Aug 2017',
        company: { link: '', title: 'Bashneft-Inform' },
        position: 'Front-end Developer',
        description: ['Participated in the development of a Service Desk web application for incident management and automation support;', 'Implemented ticket history module that enabled IT specialist to track the history of all the activities that have occurred to a ticket during its lifespan;', 'Improved viewing experience of a web application by introducing responsive web design for mobile devices;'],
        location: 'Ufa, Bashkortostan'
      }
    ],
    skills: [
      {
        title: 'Languages',
        data: [
          { iconSrc: javascriptIcon, title: 'JavaScript', href: "https://en.wikipedia.org/wiki/JavaScript" },
          { iconSrc: typescriptIcon, title: 'TypeScript', href: "https://www.typescriptlang.org" },
          { iconSrc: htmlIcon, title: 'HTML', href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
          { iconSrc: cssIcon, title: 'CSS', href: "https://www.w3.org/Style/CSS" },
        ]
      },
      {
        title: 'Libraries',
        data: [
          { iconSrc: reactIcon, title: 'reactjs', href: "https://reactjs.org/" },
          { iconSrc: reduxIcon, title: 'redux', href: "https://redux.js.org/" },
          { iconSrc: materialUiIcon, title: 'material-ui', href: "https://material-ui.com/" },
          { iconSrc: styledComponentsIcon, title: 'styled-components', href: "https://styled-components.com/" },
          { iconSrc: tailwindcssIcon, title: 'tailwindcss', href: "https://tailwindcss.com/" },
          { iconSrc: draftjsIcon, title: 'draftjs', href: "https://draftjs.org/" },
          { iconSrc: lodashIcon, title: 'lodash', href: "https://lodash.com/" },
          { iconSrc: dateFnsIcon, title: 'date-fns', href: "https://date-fns.org/" },
          { iconSrc: fptsIcon, title: 'fp-ts', href: "https://gcanti.github.io/fp-ts/" },
          { iconSrc: jestIcon, title: 'jest', href: "https://jestjs.io/" },
          { iconSrc: enzymeIcon, title: 'enzyme', href: "https://enzymejs.github.io/enzyme" },
          { iconSrc: amchartsIcon, title: 'amcharts4', href: "https://www.amcharts.com/docs/v4/" },
        ]
      },
      {
        title: 'Frameworks',
        data: [
          { iconSrc: reactIcon, title: 'react-native', href: "https://reactnative.dev/" },
          { iconSrc: nextjsIcon, title: 'nextjs', href: "https://nextjs.org/" },
          { iconSrc: gatsbyIcon, title: 'gatsby', href: "https://www.gatsbyjs.com/" },
        ]
      },
      {
        title: 'Serverless',
        data: [
          { iconSrc: googleFirebaseIcon, title: 'Google Firebase', href: "https://firebase.google.com/" },
        ]
      },
      {
        title: 'Vendor specific',
        data: [
          { iconSrc: stripeIcon, title: 'Stripe', href: "https://stripe.com/" },
          { iconSrc: sentryIcon, title: 'Sentry', href: "https://sentry.io/" }
        ]
      },
      {
        title: 'Tools',
        data: [
          { iconSrc: gitIcon, title: 'git', href: "https://git-scm.com/" },
          { iconSrc: webpackIcon, title: 'webpack', href: "https://webpack.js.org/" },
          { iconSrc: jiraIcon, title: 'jira', href: "https://www.atlassian.com/ru/software/jira" }
        ]
      }
    ],
    education: [
      {
        date: '2006 - 2011',
        university: 'Ufa State Aviation Technical University',
        degree: 'Bachelor of Science in Information Security'
      }
    ],
    languages: [
      { language: 'Russian', proficiency: 'native' },
      { language: 'English', proficiency: 'advanced' }
    ],
    contributions: [
      { date: '2020', link: 'https://github.com/gatsbyjs/gatsby-ru/pull/39', project: 'Gatsby Official Tutorial', description: 'Contributed into translation of official tutorial into Russian' },
      { date: '2019', link: 'https://github.com/reactjs/ru.reactjs.org/pull/98', project: 'Reactjs Official Documentation', description: 'Contributed into translation of official documentation into Russian' },
      { date: '2018', link: 'https://github.com/RinatRezyapov/Vault-13', project: 'Fallout 2 game in JavaScript', description: 'Created a video tutorial about how to recreate Fallout 2 in JavaScript' }
    ],
    social: [
      { src: githubIcon, iconHeight: 30, href: 'https://github.com/RinatRezyapov' },
      { src: twitterIcon, iconHeight: 30, href: 'https://twitter.com/RinatRezyapov' },
      { src: linkedinIcon, iconHeight: 30, href: 'https://www.linkedin.com/in/rinatrezyapov' }
    ]
  }

  const onCvDownloadClick = () => {

  }

  return (
    <Wrapper>
      <SEO title='Rinat Rezyapov CV' />
      <C1>
        <Title>{`${userData.name} ${userData.lastName}`}</Title>
        <Spacer mb={0.5} />
        <FullWidthSubtitle2>{userData.title}</FullWidthSubtitle2>
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
      <Fab
        href={CvPdf}
        download
      >
        <SvgStyled alt='download-cv-pdf' src={PdfIcon} />
      </Fab>
      <Link to={`/`}>
      <Fab style={{ left: 16 }}>
        <SvgStyled alt='back' src={backArrowIcon} />
      </Fab>
      </Link>
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
  position: relative;
  z-index: 1;
  width: 960px;
  margin: 0 auto;
  display: flex;
  padding: 1rem 0;
  @media (max-width: 1024px) {
    width: auto;
    flex-direction: column;
  }
`;

const C1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const C2 = styled.div`
  flex: 1;
  padding: 1rem;
`;

const BackIcon = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 10px;
  top: 15px;
  opacity: 70%;
  cursor: pointer;
  &:hover {
    opacity: 100%;
  } 
`;

const Fab = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 16px;
  bottom: 16px;
  width: 64px;
  height: 64px;
  color: white;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
  outline: 0;
  &:before {
    background: linear-gradient(130deg,#ff7a18,#af002d,#a960ee);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 50%;
    content: "";
    box-sizing: border-box;
  }
  &:after {
    border-radius: 50%;
    position: absolute;
    top: .3rem;
    bottom: .3rem;
    left: .3rem;
    right: .3rem;
    background: #191d1f;
    -webkit-transition: opacity .25s;
    transition: opacity .25s;
    opacity: 0;
    content: "";
  }
  &:hover:after {
    opacity: 1;
  }
`;

const SvgStyled = styled.img`
  position: relative;
  z-index: 1;
  width: 24px;
  margin-bottom: 0;
`;

const FullWidthSubtitle2 = styled(Subtitle2)`
  width: 100%;
  text-align: center;
`;