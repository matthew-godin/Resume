import { Typography, Col, Row } from 'antd';
import EDUCATION from './constants/Education';
const { Title } = Typography;

function Education(props) {
  const titleStyle = { fontSize: props.titleFontSize, margin: '0', fontWeight: 'bold', color: 'black',
    paddingTop: props.titlePadding, paddingBottom: props.titleSecondaryPadding}

  return (
    <>
        <Title style={titleStyle} level={5}>{EDUCATION.title}</Title>
        <hr style={props.hrStyle}/>
        <Row style={{paddingTop: props.mainPadding, paddingBottom: props.secondaryPadding}}>
          <Col style={props.universityTitleWeight} xs={12}>{EDUCATION.university}</Col>
          <Col xs={4}></Col>
          <Col xs={8} style={props.universityDatesWeight}>{EDUCATION.date}</Col>
        </Row>
        <Row style={{paddingBottom: props.mainPadding}}>
          <Col style={props.jobDescriptionStyle} xs={10}>{EDUCATION.degree + ", " + EDUCATION.mention + " " + EDUCATION.major}</Col>
          <Col xs={14} style={{textAlign: 'right', fontSize: '11px', fontWeight: props.universitySkillsWeight}}></Col>
        </Row>
    </>
  );
}

export default Education;
