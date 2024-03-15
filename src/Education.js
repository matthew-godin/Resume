import { Typography, Col, Row } from 'antd';
const { Title, Paragraph } = Typography;

function Education(props) {
  return (
    <>
        <Title style={{ fontSize: props.titleFontSize, margin: '0', fontWeight: 'bold', color: 'black', paddingTop: props.titlePadding, paddingBottom: props.titleSecondaryPadding}} level={5}>Education</Title>
        <hr style={props.hrStyle}/>
        <Row style={{paddingTop: props.mainPadding, paddingBottom: props.secondaryPadding}}>
          <Col style={props.universityTitleWeight} xs={12}>University of Waterloo</Col>
          <Col xs={4}></Col>
          <Col xs={8} style={props.universityDatesWeight}>September 2017 - April 2022</Col>
        </Row>
        <Row style={{paddingBottom: props.mainPadding}}>
          <Col style={props.jobDescriptionStyle} xs={10}>Bachelor's Degree, Honours Software Engineering</Col>
          <Col xs={14} style={{textAlign: 'right', fontSize: '11px', fontWeight: props.universitySkillsWeight}}></Col>
        </Row>
    </>
  );
}

export default Education;
