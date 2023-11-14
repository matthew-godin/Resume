import './App.css';
import { Typography, Space, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
const { Title, Paragraph } = Typography;

const jobUniversityProjectSkillsWeight = '500';
const jobSkillsWeight = jobUniversityProjectSkillsWeight;
const universitySkillsWeight = jobUniversityProjectSkillsWeight;
const projectSkillsWeight = jobUniversityProjectSkillsWeight;

const jobUniversityProjectDatesStyle = {textAlign: 'right', fontSize: '13px', fontWeight: 'bold'};
const jobDatesWeight = jobUniversityProjectDatesStyle;
const universityDatesWeight = jobUniversityProjectDatesStyle;
const projectDatesWeight = jobUniversityProjectDatesStyle;

const jobUniversityProjectTitleStyle = {fontSize: '13px', fontWeight: 'bold'};
const jobTitleWeight = jobUniversityProjectTitleStyle;
const universityTitleWeight = jobUniversityProjectTitleStyle;
const projectTitleWeight = jobUniversityProjectTitleStyle;

const jobUniversityProjectCityStyle = {fontSize: '11px', fontWeight: 'bold', color: 'black', display: 'inline'};
const jobCityStyle = jobUniversityProjectCityStyle;
const universityCityStyle = jobUniversityProjectCityStyle;

const jobUniversityProjectDescriptionStyle = {fontSize: '11px', fontWeight: '500', color: 'black', display: 'inline'};
const jobDescriptionStyle = jobUniversityProjectDescriptionStyle;
const universityDescriptionStyle = jobUniversityProjectDescriptionStyle;
const projectDescriptionStyle = jobUniversityProjectDescriptionStyle;

function App() {
  return (
    <>
    <div style={{ margin: '0', width: '100%', backgroundColor: '#242424'}}>
      <div style={{ paddingBottom: '2%', paddingLeft: '6%', paddingTop: '4%', marginTop: 0, marginBottom: 0, width: '95%'}}>
        <Title level={1} style={{marginTop: '0', marginBottom: '8px', color: 'white', fontWeight: '500'}}>Matthew Godin</Title>
        <span><Link to='mailto:mathieu.godin.software.engineer@gmail.com' style={{textDecoration: 'none'}}><span style={{verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0'}}><Paragraph style={{fontSize: '12px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'}}>mathieu.godin.software.engineer@gmail.com</Paragraph></span></Link><span style={{verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0'}}><Paragraph style={{fontSize: '12px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '5px', marginRight: '5px'}}>•</Paragraph></span><Link to='tel:5196350965' style={{textDecoration: 'none'}}><span style={{verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0'}}><Paragraph style={{fontSize: '12px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'}}>(519) 635-0965</Paragraph></span></Link><span style={{verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0'}}><Paragraph style={{fontSize: '12px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '5px'}}>•</Paragraph></span><span style={{verticalAlign: 'bottom', display: 'inline-block', padding: '0', margin: '0', marginRight: '5px', marginLeft: '5px'}}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path style={{fill: 'white'}} d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></span><Link to='https://www.linkedin.com/in/mathieu-godin-software-engineer/' style={{textDecoration: 'none'}}><span style={{verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0'}}><Paragraph style={{fontSize: '12px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'}}>mathieu-godin-software-engineer</Paragraph></span></Link><span style={{verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0'}}><Paragraph style={{fontSize: '12px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '5px'}}>•</Paragraph></span><span style={{verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0', marginRight: '5px', marginLeft: '5px'}}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path style={{fill: 'white'}} d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></span><span style={{verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0'}}><Link to="https://github.com/mathieu-godin" style={{textDecoration: 'none'}}><Paragraph style={{fontSize: '12px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'}}>mathieu-godin</Paragraph></Link></span></span>
      </div>
    </div>
    <Space direction="vertical"
          style={{ paddingLeft: '6%', width: '89%'}}>
        <Title style={{ margin: '0', paddingTop: '2%', fontWeight: 'bold', color: 'black'}} level={5}>Skills</Title>
        <Paragraph style={{ margin: '0', fontSize: '12px', fontWeight: 'bold'}}><Paragraph style={{ margin: '0', fontSize: '12px', display: 'inline', fontWeight: 'bold', color: 'black'}}>Programming Languages</Paragraph> - C# • TypeScript • JavaScript • SQL • Python • Go • C++ • C • Swift • Java • PHP</Paragraph>
        <Paragraph style={{ margin: '0', fontSize: '12px', fontWeight: 'bold'}}><Paragraph style={{ margin: '0', fontSize: '12px', display: 'inline', fontWeight: 'bold', color: 'black'}}>Tools</Paragraph> - Git • Bash • Powershell • Docker • Visual Studio • IntelliJ • Android Studio • Xcode</Paragraph>
        <Paragraph style={{ margin: '0', fontSize: '12px', fontWeight: 'bold'}}><Paragraph style={{ margin: '0', fontSize: '12px', display: 'inline', fontWeight: 'bold', color: 'black'}}>Frameworks</Paragraph> - Node.js • Deno • React • Vue • .NET • Xamarin • Jest • NUnit • JUnit</Paragraph>
        <Title style={{ margin: '0', fontWeight: 'bold', color: 'black'}} level={5}>Experience</Title>
        <Row>
          <Col style={jobTitleWeight} xs={12}>Software Developer - Ceridian <Paragraph style={jobCityStyle}>&ensp;Toronto, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={jobDatesWeight}>May 2022 - Present</Col>
        </Row>
        <Row>
          <Col style={jobDescriptionStyle} xs={16}>Ceridian Dayforce Reward Letters, Compensation Guidelines, Candidate Management</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: jobSkillsWeight}}>C# • TypeScript • SQL • .NET • React</Col>
        </Row>
        <Row>
          <Col style={jobTitleWeight} xs={12}>Software Developer Intern - Ceridian <Paragraph style={jobCityStyle}>&ensp;Toronto, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={jobDatesWeight}>September 2021 - December 2021</Col>
        </Row>
        <Row>
          <Col style={jobDescriptionStyle} xs={16}>Ceridian Dayforce Compensation Cycles</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: jobSkillsWeight}}>C# • TypeScript • SQL • .NET • React</Col>
        </Row>
        <Row>
          <Col style={jobTitleWeight} xs={12}>Software Developer Intern - Skillbook Academy <Paragraph style={jobCityStyle}>&ensp;Toronto, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={jobDatesWeight}>January 2021 - April 2021</Col>
        </Row>
        <Row>
          <Col style={jobDescriptionStyle} xs={16}>Skillbook Academy Admin Dashboard</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: jobSkillsWeight}}>TypeScript • PHP • Laravel • Vue • SQL</Col>
        </Row>
        <Row>
          <Col style={jobTitleWeight} xs={12}>Software Developer Intern - Virtek Vision <Paragraph style={jobCityStyle}>&ensp;Waterloo, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={jobDatesWeight}>June 2020 - August 2020</Col>
        </Row>
        <Row>
          <Col style={jobDescriptionStyle} xs={16}>Virtek PDC 2020.08</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: jobSkillsWeight}}>C# • Python • C++ • WPF • ACIS</Col>
        </Row>
        <Row>
          <Col style={jobTitleWeight} xs={12}>Software Developer Intern - Bentley Systems <Paragraph style={jobCityStyle}>&ensp;Burlington, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={jobDatesWeight}>September 2019 - December 2019</Col>
        </Row>
        <Row>
          <Col style={jobDescriptionStyle} xs={16}>Bentley APM Mobile Inspections</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: jobSkillsWeight}}>C# • Xamarin • Android • iOS • NUnit</Col>
        </Row>
        <Row>
          <Col style={jobTitleWeight} xs={14}>Software Developer Intern - Netint Technologies <Paragraph style={jobCityStyle}>&ensp;Markham, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={6} style={jobDatesWeight}>January 2019 - April 2019</Col>
        </Row>
        <Row>
          <Col style={jobDescriptionStyle} xs={16}>Netint T408 Codensity SSD Automated Testing</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: jobSkillsWeight}}>Python • NVMe</Col>
        </Row>
        <Row>
          <Col style={jobTitleWeight} xs={12}>Software Developer Intern - Wind River Systems <Paragraph style={jobCityStyle}>&ensp;Ottawa, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={jobDatesWeight}>May 2018 - August 2018</Col>
        </Row>
        <Row>
          <Col style={jobDescriptionStyle} xs={16}>Wind River Titanium Cloud Infrastructure</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: jobSkillsWeight}}>Python • InfluxDB • Grafana</Col>
        </Row>
        <Title style={{ margin: '0', fontWeight: 'bold', color: 'black'}} level={5}>Education</Title>
        <Row>
          <Col style={universityTitleWeight} xs={12}>University of Waterloo <Paragraph style={universityCityStyle}>&ensp;Waterloo, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={universityDatesWeight}>September 2017 - April 2022</Col>
        </Row>
        <Row>
          <Col style={jobDescriptionStyle} xs={7}>Honours Software Engineering, Co-op</Col>
          <Col xs={17} style={{textAlign: 'right', fontSize: '11px', fontWeight: universitySkillsWeight}}>Machine Learning • Multithreaded Development • Compiler Construction • Feedback Control Systems</Col>
        </Row>
        <Title style={{ margin: '0', fontWeight: 'bold', color: 'black'}} level={5}>Projects</Title>
        <Row>
          <Col style={projectTitleWeight} xs={12}>Talk to Me</Col>
          <Col xs={4}></Col>
          <Col xs={8} style={projectDatesWeight}>August 2022</Col>
        </Row>
        <Row>
          <Col style={jobDescriptionStyle} xs={18}>First Place for Most Well-Rounded Hack in North America, Ceridian Hackathon 2022 (Chat bot app)</Col>
          <Col xs={6} style={{textAlign: 'right', fontSize: '11px', fontWeight: projectSkillsWeight}}>TypeScript • Swift • iOS • React</Col>
        </Row>
        <Row>
          <Col style={projectTitleWeight} xs={12}>Licode</Col>
          <Col xs={4}></Col>
          <Col xs={8} style={projectDatesWeight}>September 2020 - April 2022</Col>
        </Row>
        <Row>
          <Col style={jobDescriptionStyle} xs={16}>University of Waterloo Capstone Project (Website similar to leetcode.com)</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: projectSkillsWeight}}>TypeScript • Go • Deno • Docker • React</Col>
        </Row>
        <Row>
          <Col style={projectTitleWeight} xs={12}>Once Upon a Time</Col>
          <Col xs={4}></Col>
          <Col xs={8} style={projectDatesWeight}>September 2018</Col>
        </Row>
        <Row>
          <Col style={jobDescriptionStyle} xs={16}>First Place - Hack the North 2018 (VR app)</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: projectSkillsWeight}}>C# • Node.js • IBM Watson • Socket.io • Unity</Col>
        </Row>
        <Row>
          <Col style={projectTitleWeight} xs={12}>Aya</Col>
          <Col xs={4}></Col>
          <Col xs={8} style={projectDatesWeight}>September 2017</Col>
        </Row>
        <Row>
          <Col style={jobDescriptionStyle} xs={14}>First Place - Hack the North 2017 (Intelligent robot head)</Col>
          <Col xs={10} style={{textAlign: 'right', fontSize: '11px', fontWeight: projectSkillsWeight}}>Python • AWS • Embedded Software • 3D Printing</Col>
        </Row>
        <Row>
          <Col style={projectTitleWeight} xs={12}>Messenger Latex</Col>
          <Col xs={4}></Col>
          <Col xs={8} style={projectDatesWeight}>June 2017</Col>
        </Row>
        <Row>
          <Col style={jobDescriptionStyle} xs={16}>First Place - MHacks Nano 2017 (Google Chrome plugin)</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: projectSkillsWeight}}>JavaScript</Col>
        </Row>
        <Row>
          <Col style={projectTitleWeight} xs={12}>Hyper-V</Col>
          <Col xs={4}></Col>
          <Col xs={8} style={projectDatesWeight}>January 2017 - May 2017</Col>
        </Row>
        <Row>
          <Col style={jobDescriptionStyle} xs={16}>Collège Lionel-Groulx graduation project (3D adventure game)</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: projectSkillsWeight}}>C# • WPF • XNA</Col>
        </Row>
      </Space>
    </>
  );
}

export default App;
