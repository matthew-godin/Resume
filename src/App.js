import './App.css';
import { Typography, Space, Card, Col, Row, List } from 'antd';
import { Link } from 'react-router-dom';
import Website from './Website';
import Email from './Email';
import Dot1 from './Dot1';
import Phone from './Phone';
import Dot2 from './Dot2';
import Linkedin from './Linkedin';
import Github from './Github';
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
        <span><Email fontSize={headlineFontSize} /><Dot2 fontSize={headlineFontSize} /><Linkedin fontSize={headlineFontSize} /><Dot2 fontSize={headlineFontSize} /><Github fontSize={headlineFontSize} /><Dot1 fontSize={headlineFontSize} /><Website fontSize={headlineFontSize} /></span>
      </div>
    </div>
    <div
          style={{ paddingLeft: '6%', width: '89%'}}>
        <Title style={{ fontSize: titleFontSize, margin: '0', paddingTop: '3%', paddingBottom: titleSecondaryPadding, fontWeight: 'bold', color: 'black' }} level={5}>Skills</Title>
        <hr style={hrStyle}/>
        <Paragraph style={{ margin: '0', fontSize: '12px', fontWeight: 'bold', paddingTop: skillsPadding, paddingBottom: skillsPadding}}><Paragraph style={{ margin: '0', fontSize: '12px', display: 'inline', fontWeight: 'bold', color: 'black'}}>Programming Languages</Paragraph> - C# • TypeScript • JavaScript • SQL • Python • Go • C++ • C • Java • Swift • Kotlin • PHP</Paragraph>
        <Paragraph style={{ margin: '0', fontSize: '12px', fontWeight: 'bold', paddingTop: skillsPaddingLarger, paddingBottom: skillsPaddingLarger}}><Paragraph style={{ margin: '0', fontSize: '12px', display: 'inline', fontWeight: 'bold', color: 'black'}}>Tools</Paragraph> - Git • Bash • Powershell • Docker • VS Code • Visual Studio • IntelliJ • Android Studio • Xcode</Paragraph>
        <Paragraph style={{ margin: '0', fontSize: '12px', fontWeight: 'bold', paddingTop: skillsPadding, paddingBottom: skillsPadding}}><Paragraph style={{ margin: '0', fontSize: '12px', display: 'inline', fontWeight: 'bold', color: 'black'}}>Frameworks</Paragraph> - Node.js • Deno • React • Vue • ASP.NET Core • Laravel • PyTorch • Kafka • Spark • WebGL • Jest • NUnit • JUnit</Paragraph>
        <Title style={{ fontSize: titleFontSize, margin: '0', fontWeight: 'bold', color: 'black', paddingTop: titlePadding, paddingBottom: titleSecondaryPadding }} level={5}>Experience</Title>
        <hr style={hrStyle}/>
        <Row style={{paddingTop: mainPadding, paddingBottom: secondaryPadding}}>
          <Col style={jobTitleWeight} xs={12}>Software Developer - Ceridian <Paragraph style={jobCityStyle}>&ensp;Toronto, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={jobDatesWeight}>May 2022 - Present</Col>
        </Row>
        <Row style={{paddingBottom: secondarySecondaryPadding}}>
          <Col style={jobDescriptionStyle} xs={16}>Dayforce Candidate Management, Guidelines and Message Center</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: jobSkillsWeight}}>C# • TypeScript • SQL • ASP.NET Core • React</Col>
        </Row>
        <Row style={{paddingBottom: mainPadding}}>
          <Col xs={24}>
            <ul style ={{margin: '0', paddingInlineStart: '20px'}}>
              <li style={jobAdditionalInformationStyle}>Developed LaunchDarkly APIs enabling the release of features to specific clients in a few clicks</li>
              <li style={jobAdditionalInformationStyle}>Revamped new and previous screens to follow the best accessibility standards thoroughly by conforming to WAI's WCAG 2.1</li>
              <li style={jobAdditionalInformationStyle}>Developed React grids and dialogs that fetch and send data to the back end</li>
              <li style={jobAdditionalInformationStyle}>Developed REST APIs and SQL Server queries performing sorts, filters, and business logic</li>
              <li style={jobAdditionalInformationStyle}>Developed an interactive dialog allowing the insertion of different tokens to send personalized reward messages</li>
            </ul>
          </Col>
        </Row>
        <Row style={{paddingTop: mainPadding, paddingBottom: secondaryPadding}}>
          <Col style={jobTitleWeight} xs={12}>Software Developer Intern - Ceridian <Paragraph style={jobCityStyle}>&ensp;Toronto, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={jobDatesWeight}>September 2021 - December 2021</Col>
        </Row>
        <Row style={{paddingBottom: secondarySecondaryPadding}}>
          <Col style={jobDescriptionStyle} xs={16}>Dayforce Reward Letters and Compensation Cycles</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: jobSkillsWeight}}>C# • TypeScript • SQL • ASP.NET Core • React</Col>
        </Row>
        <Row style={{paddingBottom: mainPadding}}>
          <Col xs={24}>
            <ul style ={{margin: '0', paddingInlineStart: '20px'}}>
              <li style={jobAdditionalInformationStyle}>Upgraded REST APIs to send additional data and developed new features such as Reward Letter Equity Details using IronPDF</li>
            </ul>
          </Col>
        </Row>
        <Row style={{paddingTop: mainPadding, paddingBottom: secondaryPadding}}>
          <Col style={jobTitleWeight} xs={12}>Software Developer Intern - Skillbook Academy <Paragraph style={jobCityStyle}>&ensp;Toronto, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={jobDatesWeight}>January 2021 - April 2021</Col>
        </Row>
        <Row style={{paddingBottom: secondarySecondaryPadding}}>
          <Col style={jobDescriptionStyle} xs={16}>Administrator Dashboard</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: jobSkillsWeight}}>TypeScript • PHP • Laravel • Vue • SQL</Col>
        </Row>
        <Row style={{paddingBottom: mainPadding}}>
          <Col xs={24}>
            <ul style ={{margin: '0', paddingInlineStart: '20px'}}>
              <li style={jobAdditionalInformationStyle}>Developed robust and secure REST APIs, MySQL tables normalized to BCNF, and Vue components that use Stripe's API</li>
            </ul>
          </Col>
        </Row>
        <Row style={{paddingTop: mainPadding, paddingBottom: secondaryPadding}}>
          <Col style={jobTitleWeight} xs={12}>Software Developer Intern - Virtek Vision <Paragraph style={jobCityStyle}>&ensp;Waterloo, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={jobDatesWeight}>June 2020 - August 2020</Col>
        </Row>
        <Row style={{paddingBottom: secondarySecondaryPadding}}>
          <Col style={jobDescriptionStyle} xs={16}>PDC 2020.08</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: jobSkillsWeight}}>C# • Python • C++ • WPF • ACIS</Col>
        </Row>
        <Row style={{paddingBottom: mainPadding}}>
          <Col xs={24}>
            <ul style ={{margin: '0', paddingInlineStart: '20px'}}>
              <li style={jobAdditionalInformationStyle}>Developed new features including Center Snap Mode and Projected Text, improved the installer and reduced the build time by 88%</li>
            </ul>
          </Col>
        </Row>
        <Row style={{paddingTop: mainPadding, paddingBottom: secondaryPadding}}>
          <Col style={jobTitleWeight} xs={12}>Software Developer Intern - Bentley Systems <Paragraph style={jobCityStyle}>&ensp;Burlington, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={jobDatesWeight}>September 2019 - December 2019</Col>
        </Row>
        <Row style={{paddingBottom: secondarySecondaryPadding}}>
          <Col style={jobDescriptionStyle} xs={16}>APM Mobile Inspections</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: jobSkillsWeight}}>C# • Xamarin • Android • iOS</Col>
        </Row>
        <Row style={{paddingBottom: mainPadding}}>
          <Col xs={24}>
            <ul style ={{margin: '0', paddingInlineStart: '20px'}}>
              <li style={jobAdditionalInformationStyle}>Developed dark mode, ability to scan distant barcodes by improving the Zxing.Net.Mobile library and a Collection Requirements feature</li>
            </ul>
          </Col>
        </Row>
        <Row style={{paddingTop: mainPadding, paddingBottom: secondaryPadding}}>
          <Col style={jobTitleWeight} xs={14}>Software Developer Intern - Netint Technologies <Paragraph style={jobCityStyle}>&ensp;Markham, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={6} style={jobDatesWeight}>January 2019 - April 2019</Col>
        </Row>
        <Row style={{paddingBottom: secondarySecondaryPadding}}>
          <Col style={jobDescriptionStyle} xs={16}>Codensity T408 SSD Automated Tests</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: jobSkillsWeight}}>Python • NVMe</Col>
        </Row>
        <Row style={{paddingBottom: mainPadding}}>
          <Col xs={24}>
            <ul style ={{margin: '0', paddingInlineStart: '20px'}}>
              <li style={jobAdditionalInformationStyle}>Developed automated tests that test random and sequential read and write operations</li>
            </ul>
          </Col>
        </Row>
        <Row style={{paddingTop: mainPadding, paddingBottom: secondaryPadding}}>
          <Col style={jobTitleWeight} xs={12}>Software Developer Intern - Wind River Systems <Paragraph style={jobCityStyle}>&ensp;Ottawa, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={jobDatesWeight}>May 2018 - August 2018</Col>
        </Row>
        <Row style={{paddingBottom: secondarySecondaryPadding}}>
          <Col style={jobDescriptionStyle} xs={16}>Titanium Cloud Infrastructure</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: jobSkillsWeight}}>Python • InfluxDB • Grafana</Col>
        </Row>
        <Row style={{paddingBottom: mainPadding}}>
          <Col xs={24}>
            <ul style ={{margin: '0', paddingInlineStart: '20px'}}>
              <li style={jobAdditionalInformationStyle}>Developed dashboards that track network performance and process counts in real time</li>
            </ul>
          </Col>
        </Row>
        <Title style={{ fontSize: titleFontSize, margin: '0', fontWeight: 'bold', color: 'black', paddingTop: titlePadding, paddingBottom: titleSecondaryPadding}} level={5}>Education</Title>
        <hr style={hrStyle}/>
        <Row style={{paddingTop: mainPadding, paddingBottom: secondaryPadding}}>
          <Col style={universityTitleWeight} xs={12}>University of Waterloo <Paragraph style={universityCityStyle}>&ensp;Waterloo, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={universityDatesWeight}>September 2017 - April 2022</Col>
        </Row>
        <Row style={{paddingBottom: mainPadding}}>
          <Col style={jobDescriptionStyle} xs={10}>Bachelor's Degree, Honours Software Engineering, Co-op</Col>
          <Col xs={14} style={{textAlign: 'right', fontSize: '11px', fontWeight: universitySkillsWeight}}></Col>
        </Row>
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
          <Col style={jobDescriptionStyle} xs={18}>Chat bot app that allows you to easily fill in HR forms (first place, Ceridian Hackathon 2022)</Col>
          <Col xs={6} style={{textAlign: 'right', fontSize: '11px', fontWeight: projectSkillsWeight}}>TypeScript • Swift • iOS • React</Col>
        </Row>
        <Row style={{paddingTop: mainPadding}}>
          <Col style={projectTitleWeight} xs={12}><Link to='https://github.com/mathieu-godin/OnceUponATime' style={projectTitleWeight}>Once Upon a Time</Link></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={projectDatesWeight}>September 2018</Col>
        </Row>
        <Row style={{paddingBottom: mainPadding}}>
          <Col style={jobDescriptionStyle} xs={16}>VR app generating scenery according to the story you're telling (first place, Hack the North 2018)</Col>
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
          <Col style={jobDescriptionStyle} xs={20}>Google Chrome plugin to write mathematical expressions in Facebook Messenger (first place, MHacks Nano 2017)</Col>
          <Col xs={4} style={{textAlign: 'right', fontSize: '11px', fontWeight: projectSkillsWeight}}>JavaScript</Col>
        </Row>
      </div>
    </>
  );
}

export default App;
