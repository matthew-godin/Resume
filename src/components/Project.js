import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

function Project(props) {
  let descriptionProportioning = { description: 15, skills: 9 };
  if (props.description.length > 90) {
    if (props.skills.length > 40) {
      descriptionProportioning = { description: 16, skills: 8 };
    } else if (props.skills.length > 30) {
      descriptionProportioning = { description: 18, skills: 6 };
    } else {
      descriptionProportioning = { description: 21, skills: 3 };
    }
  }
  return (
    <>
        <Row style={{paddingTop: props.mainPadding}}>
          <Col style={props.projectTitleWeight} xs={16}><Link to={props.link} style={props.projectTitleWeight}>{props.title}</Link></Col>
          <Col xs={8} style={props.projectDatesWeight}>{props.date}</Col>
        </Row>
        <Row style={{paddingBottom: props.mainPadding}}>
          <Col style={props.descriptionStyle} xs={descriptionProportioning.description}>{props.description}</Col>
          <Col xs={descriptionProportioning.skills} style={{textAlign: 'right', fontSize: '11px', fontWeight: props.projectSkillsWeight}}>{props.skills}</Col>
        </Row>
    </>
  );
}

export default Project;
