import './App.css';
import { Typography, Col, Row } from 'antd';
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

const { Title, Paragraph } = Typography;

const jobUniversityProjectSkillsWeight = '500';
const jobSkillsWeight = jobUniversityProjectSkillsWeight;
const universitySkillsWeight = jobUniversityProjectSkillsWeight;
const projectSkillsWeight = jobUniversityProjectSkillsWeight;

const titleFontSize = '18px';

const jobUniversityProjectDatesStyle = {textAlign: 'right', fontSize: '13px', fontWeight: 'bold'};
const jobDatesWeight = jobUniversityProjectDatesStyle;
const universityDatesWeight = jobUniversityProjectDatesStyle;
const projectDatesWeight = jobUniversityProjectDatesStyle;

const jobUniversityProjectTitleStyle = {fontSize: '13px', fontWeight: 'bold', textDecoration: 'none', color: 'black'};
const jobTitleWeight = jobUniversityProjectTitleStyle;
const universityTitleWeight = jobUniversityProjectTitleStyle;
const projectTitleWeight = jobUniversityProjectTitleStyle;

const jobUniversityProjectCityStyle = {fontSize: '11px', fontWeight: 'bold', color: 'black', display: 'inline'};
const jobCityStyle = jobUniversityProjectCityStyle;
const universityCityStyle = jobUniversityProjectCityStyle;

const jobUniversityProjectDescriptionStyle = {fontSize: '11px', fontWeight: '500', color: 'black', display: 'inline'};
const jobAdditionalInformationStyle = {fontSize: '11px', fontWeight: '500', color: 'black'};
const jobDescriptionStyle = jobUniversityProjectDescriptionStyle;
const universityDescriptionStyle = jobUniversityProjectDescriptionStyle;
const projectDescriptionStyle = jobUniversityProjectDescriptionStyle;

const hrStyle = {paddingTop: 0, marginTop: 0, borderTop: 'dashed', borderWidth: '1px', borderColor: 'black', backgroundColor: 'transparent', borderBottom: 'none', borderLeft: 'none', borderRight: 'none'};

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
        <Title level={1} style={{marginTop: '0', marginBottom: '8px', color: 'white', fontWeight: '500'}}>Matthew Godin</Title>
        <span>
          <Website fontSize={headlineFontSize} />
          <Dot1 fontSize={headlineFontSize} />
          <Email fontSize={headlineFontSize} />
          <Dot2 fontSize={headlineFontSize} />
          <Linkedin fontSize={headlineFontSize} />
          <Dot2 fontSize={headlineFontSize} />
          <Github fontSize={headlineFontSize} />
        </span>
      </div>
    </div>
    <div style={{ paddingLeft: '6%', width: '89%'}}>
        <Skills hrStyle={hrStyle} titleFontSize={titleFontSize} titleSecondaryPadding={titleSecondaryPadding} skillsPadding={skillsPadding}
          skillsPaddingLarger={skillsPaddingLarger} />
        <Education hrStyle={hrStyle} titleFontSize={titleFontSize} titlePadding={titlePadding} titleSecondaryPadding={titleSecondaryPadding} mainPadding={mainPadding}
          secondaryPadding={secondaryPadding} universityTitleWeight={universityTitleWeight} universityDatesWeight={universityDatesWeight}
          jobDescriptionStyle={jobDescriptionStyle} universitySkillsWeight={universitySkillsWeight} universityCityStyle={universityCityStyle} />
        <Experience hrStyle={hrStyle} mainPadding={mainPadding} secondaryPadding={secondaryPadding} secondarySecondaryPadding={secondarySecondaryPadding}
          titleFontSize={titleFontSize} titlePadding={titlePadding} titleSecondaryPadding={titleSecondaryPadding} jobDescriptionStyle={jobDescriptionStyle}
          jobSkillsWeight={jobSkillsWeight} jobAdditionalInformationStyle={jobAdditionalInformationStyle} jobTitleWeight={jobTitleWeight} jobDatesWeight={jobDatesWeight}
          jobCityStyle={jobCityStyle} />
        <Projects hrStyle={hrStyle} titleFontSize={titleFontSize} titlePadding={titlePadding} titleSecondaryPadding={titleSecondaryPadding} mainPadding={mainPadding}
          projectTitleWeight={projectTitleWeight} projectDatesWeight={projectDatesWeight} jobDescriptionStyle={jobDescriptionStyle} projectSkillsWeight={projectSkillsWeight} />
      </div>
    </>
  );
}

export default App;
