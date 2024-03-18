import { Typography, Col, Row } from 'antd';
import Position from './Position';
import EXPERIENCE from './constants/Experience';
const { Title } = Typography;

function Experience(props) {
  return (
    <>
        <Title
          style={{ fontSize: props.titleFontSize, margin: '0', fontWeight: 'bold', color: 'black', paddingTop: props.titlePadding, paddingBottom: props.titleSecondaryPadding }}
          level={5}>
          {EXPERIENCE.title}
        </Title>
        <hr style={props.hrStyle}/>
        {EXPERIENCE.content.map((position) =>
          <Position title={position.title + " - " + position.company + " "} location={position.location} date={position.date} skills={position.skills}
            description={position.description} lines={position.lines} mainPadding={props.mainPadding} secondaryPadding={props.secondaryPadding}
            jobTitleWeight={props.jobTitleWeight} jobCityStyle={props.jobCityStyle} jobDatesWeight={props.jobDatesWeight}
            secondarySecondaryPadding={props.secondarySecondaryPadding} jobDescriptionStyle={props.jobDescriptionStyle}
            jobSkillsWeight={props.jobSkillsWeight} jobAdditionalInformationStyle={props.jobAdditionalInformationStyle} />
        )}
    </>
  );
}

export default Experience;
