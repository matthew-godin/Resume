import { Typography, Col, Row } from 'antd';
const { Paragraph } = Typography;

function Position(props) {
  return (
    <>
        <Row style={{paddingTop: props.mainPadding, paddingBottom: props.secondaryPadding}}>
          <Col style={props.jobTitleWeight} xs={16}>{props.title}<Paragraph style={props.jobCityStyle}>&ensp;{props.location}</Paragraph></Col>
          <Col xs={8} style={props.jobDatesWeight}>{props.date}</Col>
        </Row>
        <Row style={{paddingBottom: props.secondarySecondaryPadding}}>
          <Col style={props.jobDescriptionStyle} xs={16}>{props.description}</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: props.jobSkillsWeight}}>{props.skills}</Col>
        </Row>
        <Row style={{paddingBottom: props.mainPadding}}>
          <Col xs={24}>
            <ul style ={{margin: '0', paddingInlineStart: '20px'}}>
              {props.lines.map((line) =>
                  <li style={props.jobAdditionalInformationStyle}>{line}</li>
              )}
            </ul>
          </Col>
        </Row>
    </>
  );
}

export default Position;
