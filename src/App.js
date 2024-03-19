import './App.css';
import { Typography } from 'antd';
import Website from './Website';
import Email from './Email';
import Dot1 from './Dot1';
import Dot2 from './Dot2';
import Linkedin from './Linkedin';
import Github from './Github';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import HEADER from './constants/Header';
const { Title } = Typography;

const dateStyle = {textAlign: 'right', fontSize: '13px', fontWeight: 'bold'};
const titleStyle = {fontSize: '13px', fontWeight: 'bold', textDecoration: 'none', color: 'black'};
const cityStyle = {fontSize: '11px', fontWeight: 'bold', color: 'black', display: 'inline'};
const lineStyle = {fontSize: '11px', fontWeight: '500', color: 'black'};
const descriptionStyle = {fontSize: '11px', fontWeight: '500', color: 'black', display: 'inline'};
const separatorStyle = {paddingTop: 0, marginTop: 0, borderTop: 'dashed', borderWidth: '1px',
  borderColor: 'black', backgroundColor: 'transparent', borderBottom: 'none', borderLeft: 'none',
  borderRight: 'none'};

const skillWeight = '500';
const titleFontSize = '18px';
const mainPadding = '0.25%';
const secondaryPadding = '0';
const secondarySecondaryPadding = '0.2%';
const titlePadding = '0.9%';
const titleSecondaryPadding = '0.15%';
const skillsPadding = '0.15%';
const skillsPaddingLarger = '0.05%';
const headlineFontSize = 12;

function App() {
  return (
    <>
    <div style={{ margin: '0', width: '100%', backgroundColor: '#242424'}}>
      <div style={{ paddingBottom: '2%', paddingLeft: '6%', paddingTop: '4%', marginTop: 0, marginBottom: 0, width: '95%'}}>
        <Title level={1} style={{marginTop: '0', marginBottom: '8px', color: 'white', fontWeight: '500'}}>{HEADER.name}</Title>
        <span>
          <Website fontSize={headlineFontSize} link={HEADER.siteName} website={HEADER.website} />
          <Dot1 fontSize={headlineFontSize} />
          <Email fontSize={headlineFontSize} link={HEADER.mailto + HEADER.email} email={HEADER.email} />
          <Dot2 fontSize={headlineFontSize} />
          <Linkedin fontSize={headlineFontSize} link={HEADER.linkedinSiteName + HEADER.linkedinProfile} profile={HEADER.linkedinProfile} />
          <Dot2 fontSize={headlineFontSize} />
          <Github fontSize={headlineFontSize} link={HEADER.githubSiteName + HEADER.githubProfile} profile={HEADER.githubProfile} />
        </span>
      </div>
    </div>
    <div style={{ paddingLeft: '6%', width: '89%'}}>
        <Skills separatorStyle={separatorStyle} titleFontSize={titleFontSize} titleSecondaryPadding={titleSecondaryPadding}
          skillsPadding={skillsPadding} skillsPaddingLarger={skillsPaddingLarger} />
        <Education separatorStyle={separatorStyle} titleFontSize={titleFontSize} titlePadding={titlePadding}
          titleSecondaryPadding={titleSecondaryPadding} mainPadding={mainPadding} secondaryPadding={secondaryPadding}
          universityTitleWeight={titleStyle} universityDatesWeight={dateStyle} descriptionStyle={descriptionStyle}
          universitySkillsWeight={skillWeight} cityStyle={cityStyle} />
        <Experience separatorStyle={separatorStyle} mainPadding={mainPadding} secondaryPadding={secondaryPadding}
          secondarySecondaryPadding={secondarySecondaryPadding} titleFontSize={titleFontSize} titlePadding={titlePadding}
          titleSecondaryPadding={titleSecondaryPadding} descriptionStyle={descriptionStyle} jobSkillsWeight={skillWeight}
          lineStyle={lineStyle} jobTitleWeight={titleStyle} jobDatesWeight={dateStyle} jobCityStyle={cityStyle} />
        <Projects separatorStyle={separatorStyle} titleFontSize={titleFontSize} titlePadding={titlePadding}
          titleSecondaryPadding={titleSecondaryPadding} mainPadding={mainPadding} projectTitleWeight={titleStyle}
          projectDatesWeight={dateStyle} descriptionStyle={descriptionStyle} projectSkillsWeight={skillWeight} />
      </div>
    </>
  );
}

export default App;
