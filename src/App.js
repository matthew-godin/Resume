import './App.css';
import { Typography } from 'antd';
import Website from './components/Website';
import Email from './components/Email';
import Dot1 from './components/Dot1';
import Dot2 from './components/Dot2';
import Linkedin from './components/Linkedin';
import Github from './components/Github';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
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
const spanStyle = {verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0'};

const skillWeight = '500';
const titleFontSize = '18px';
const mainPadding = '0.2%';
const secondaryPadding = '0';
const secondarySecondaryPadding = '0.1%';
const titlePadding = '0.8%';
const titleSecondaryPadding = '0.1%';
const skillsPadding = '0.1%';
const skillsPaddingLarger = '0.05%';
const headlineFontSize = 12;

function App() {
  return (
    <>
      <div style={{ margin: '0', width: '100%', backgroundColor: '#242424'}}>
        <div style={{ paddingBottom: '2%', paddingLeft: '6%', paddingTop: '4%', marginTop: 0, marginBottom: 0, width: '95%'}}>
          <Title level={1} style={{marginTop: '0', marginBottom: '8px', color: 'white', fontWeight: '500'}}>{HEADER.name}</Title>
          <span>
            <Website spanStyle={spanStyle} fontSize={headlineFontSize}
              link={HEADER.siteName} website={HEADER.website} />
            <Dot1 spanStyle={spanStyle} fontSize={headlineFontSize} />
            <Email spanStyle={spanStyle} fontSize={headlineFontSize}
              link={HEADER.mailto + HEADER.email} email={HEADER.email} />
            <Dot2 spanStyle={spanStyle} fontSize={headlineFontSize} />
            <Linkedin spanStyle={spanStyle} fontSize={headlineFontSize}
              link={HEADER.linkedinSiteName + HEADER.linkedinProfile} profile={HEADER.linkedinProfile} />
            <Dot2 spanStyle={spanStyle} fontSize={headlineFontSize} />
            <Github spanStyle={spanStyle} fontSize={headlineFontSize}
              link={HEADER.githubSiteName + HEADER.githubProfile} profile={HEADER.githubProfile} />
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
