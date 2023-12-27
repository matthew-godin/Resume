import './App.css';
import { Typography, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import Website from './Website';
import Email from './Email';
import Dot1 from './Dot1';
import Dot2 from './Dot2';
import Linkedin from './Linkedin';
import Github from './Github';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';

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
        <span><Website fontSize={headlineFontSize} /><Dot1 fontSize={headlineFontSize} /><Email fontSize={headlineFontSize} /><Dot2 fontSize={headlineFontSize} /><Linkedin fontSize={headlineFontSize} /><Dot2 fontSize={headlineFontSize} /><Github fontSize={headlineFontSize} /></span>
      </div>
    </div>
    <div
          style={{ paddingLeft: '6%', width: '89%'}}>
        <Skills hrStyle={hrStyle} titleFontSize={titleFontSize} titleSecondaryPadding={titleSecondaryPadding} skillsPadding={skillsPadding}
          skillsPaddingLarger={skillsPaddingLarger} />
        <Experience hrStyle={hrStyle} mainPadding={mainPadding} secondaryPadding={secondaryPadding} secondarySecondaryPadding={secondarySecondaryPadding}
          titleFontSize={titleFontSize} titlePadding={titlePadding} titleSecondaryPadding={titleSecondaryPadding} jobDescriptionStyle={jobDescriptionStyle}
          jobSkillsWeight={jobSkillsWeight} jobAdditionalInformationStyle={jobAdditionalInformationStyle} jobTitleWeight={jobTitleWeight} jobDatesWeight={jobDatesWeight}
          jobCityStyle={jobCityStyle} />
        <Education hrStyle={hrStyle} titleFontSize={titleFontSize} titlePadding={titlePadding} titleSecondaryPadding={titleSecondaryPadding} mainPadding={mainPadding}
          secondaryPadding={secondaryPadding} universityTitleWeight={universityTitleWeight} universityDatesWeight={universityDatesWeight}
          jobDescriptionStyle={jobDescriptionStyle} universitySkillsWeight={universitySkillsWeight} />
        <Title style={{ fontSize: titleFontSize, margin: '0', fontWeight: 'bold', color: 'black', paddingTop: titlePadding, paddingBottom: titleSecondaryPadding}} level={5}>Projects</Title>
        <hr style={hrStyle}/>
        <Row style={{paddingTop: mainPadding}}>
          <Col style={projectTitleWeight} xs={12}><Link to='https://github.com/mathieu-godin/Licode-2023' style={projectTitleWeight}>Licode</Link></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={projectDatesWeight}>September 2020 - April 2022</Col>
        </Row>
        <Row style={{paddingBottom: mainPadding}}>
          <Col style={jobDescriptionStyle} xs={15}>Coding challenge platform with a 1v1 format (University of Waterloo capstone project)</Col>
          <Col xs={9} style={{textAlign: 'right', fontSize: '11px', fontWeight: projectSkillsWeight}}>TypeScript • Go • Deno • Python • Docker • SQL • React</Col>
        </Row>
        <Row style={{paddingTop: mainPadding}}>
          <Col xs={12}><Link to='https://github.com/mathieu-godin/Talk-to-Me' style={projectTitleWeight}>Talk to Me</Link></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={projectDatesWeight}>August 2022</Col>
        </Row>
        <Row style={{paddingBottom: mainPadding}}>
          <Col style={jobDescriptionStyle} xs={18}>Chat bot app that simplifies filling in HR forms (first place, Ceridian Hackathon 2022)</Col>
          <Col xs={6} style={{textAlign: 'right', fontSize: '11px', fontWeight: projectSkillsWeight}}>TypeScript • Swift • iOS • React</Col>
        </Row>
        <Row style={{paddingTop: mainPadding}}>
          <Col style={projectTitleWeight} xs={12}><Link to='https://github.com/mathieu-godin/OnceUponATime' style={projectTitleWeight}>Once Upon a Time</Link></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={projectDatesWeight}>September 2018</Col>
        </Row>
        <Row style={{paddingBottom: mainPadding}}>
          <Col style={jobDescriptionStyle} xs={16}>VR app generating scenery according to the story being told (first place, Hack the North 2018)</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: projectSkillsWeight}}>C# • Node.js • IBM Watson • Socket.io • Unity</Col>
        </Row>
        <Row style={{paddingTop: mainPadding}}>
          <Col style={projectTitleWeight} xs={12}><Link to='https://github.com/mathieu-godin/Aya' style={projectTitleWeight}>Aya</Link></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={projectDatesWeight}>September 2017</Col>
        </Row>
        <Row style={{paddingBottom: mainPadding}}>
          <Col style={jobDescriptionStyle} xs={18}>Intelligent robot head capable of recognizing people and objects (first place, Hack the North 2017)</Col>
          <Col xs={6} style={{textAlign: 'right', fontSize: '11px', fontWeight: projectSkillsWeight}}>Python • AWS • Embedded Software</Col>
        </Row>
        <Row style={{paddingTop: mainPadding}}>
          <Col style={projectTitleWeight} xs={12}><Link to='https://github.com/mathieu-godin/messenger-latex' style={projectTitleWeight}>Messenger Latex</Link></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={projectDatesWeight}>June 2017</Col>
        </Row>
        <Row style={{paddingBottom: mainPadding}}>
          <Col style={jobDescriptionStyle} xs={22}>Google Chrome plugin that allows writing mathematical expressions in Facebook Messenger (first place, MHacks Nano 2017)</Col>
          <Col xs={2} style={{textAlign: 'right', fontSize: '11px', fontWeight: projectSkillsWeight}}>JavaScript</Col>
        </Row>
      </div>
    </>
  );
}

export default App;
