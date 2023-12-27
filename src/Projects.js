import { Typography, Col, Row } from 'antd';
const { Title } = Typography;
import { Link } from 'react-router-dom';

function Projects(props) {
  return (
    <>
        <Title style={{ fontSize: props.titleFontSize, margin: '0', fontWeight: 'bold', color: 'black', paddingTop: props.titlePadding, paddingBottom: props.titleSecondaryPadding}} level={5}>Projects</Title>
        <hr style={props.hrStyle}/>
        <Row style={{paddingTop: props.mainPadding}}>
          <Col style={props.projectTitleWeight} xs={12}><Link to='https://github.com/matthew-godin/Licode-2023' style={props.projectTitleWeight}>Licode</Link></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={props.projectDatesWeight}>September 2020 - April 2022</Col>
        </Row>
        <Row style={{paddingBottom: props.mainPadding}}>
          <Col style={props.jobDescriptionStyle} xs={15}>Coding challenge platform with a 1v1 format (University of Waterloo capstone project)</Col>
          <Col xs={9} style={{textAlign: 'right', fontSize: '11px', fontWeight: props.projectSkillsWeight}}>TypeScript • Go • Deno • Python • Docker • SQL • React</Col>
        </Row>
        <Row style={{paddingTop: props.mainPadding}}>
          <Col xs={12}><Link to='https://github.com/matthew-godin/Talk-to-Me' style={props.projectTitleWeight}>Talk to Me</Link></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={props.projectDatesWeight}>August 2022</Col>
        </Row>
        <Row style={{paddingBottom: props.mainPadding}}>
          <Col style={props.jobDescriptionStyle} xs={18}>Chat bot app that simplifies filling in HR forms (first place, Ceridian Hackathon 2022)</Col>
          <Col xs={6} style={{textAlign: 'right', fontSize: '11px', fontWeight: props.projectSkillsWeight}}>TypeScript • Swift • iOS • React</Col>
        </Row>
        <Row style={{paddingTop: props.mainPadding}}>
          <Col style={props.projectTitleWeight} xs={12}><Link to='https://github.com/matthew-godin/OnceUponATime' style={props.projectTitleWeight}>Once Upon a Time</Link></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={props.projectDatesWeight}>September 2018</Col>
        </Row>
        <Row style={{paddingBottom: props.mainPadding}}>
          <Col style={props.jobDescriptionStyle} xs={16}>VR app generating scenery according to the story being told (first place, Hack the North 2018)</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: props.projectSkillsWeight}}>C# • Node.js • IBM Watson • Socket.io • Unity</Col>
        </Row>
        <Row style={{paddingTop: props.mainPadding}}>
          <Col style={props.projectTitleWeight} xs={12}><Link to='https://github.com/matthew-godin/Aya' style={props.projectTitleWeight}>Aya</Link></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={props.projectDatesWeight}>September 2017</Col>
        </Row>
        <Row style={{paddingBottom: props.mainPadding}}>
          <Col style={props.jobDescriptionStyle} xs={18}>Intelligent robot head capable of recognizing people and objects (first place, Hack the North 2017)</Col>
          <Col xs={6} style={{textAlign: 'right', fontSize: '11px', fontWeight: props.projectSkillsWeight}}>Python • AWS • Embedded Software</Col>
        </Row>
        <Row style={{paddingTop: props.mainPadding}}>
          <Col style={props.projectTitleWeight} xs={12}><Link to='https://github.com/matthew-godin/messenger-latex' style={props.projectTitleWeight}>Messenger Latex</Link></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={props.projectDatesWeight}>June 2017</Col>
        </Row>
        <Row style={{paddingBottom: props.mainPadding}}>
          <Col style={props.jobDescriptionStyle} xs={22}>Google Chrome plugin that allows writing mathematical expressions in Facebook Messenger (first place, MHacks Nano 2017)</Col>
          <Col xs={2} style={{textAlign: 'right', fontSize: '11px', fontWeight: props.projectSkillsWeight}}>JavaScript</Col>
        </Row>
    </>
  );
}

export default Projects;
