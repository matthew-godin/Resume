import { Typography } from 'antd';
import SKILLS from './constants/Skills';
const { Title, Paragraph } = Typography;

function Skills(props) {
  const getSkillsString = (skills) => {
    if (skills.length < 1) {
      return "";
    }
    let str = " - " + skills[0].name;
    for (let i = 1; i < skills.length; ++i) {
      str += " • " + skills[i].name;
    }
    return str;
  };

  const titleStyle = { fontSize: props.titleFontSize, margin: '0', paddingTop: '3%',
    paddingBottom: props.titleSecondaryPadding, fontWeight: 'bold', color: 'black' };
  const skillTitleStyle = { margin: '0', fontSize: '12px', fontWeight: 'bold',
    paddingTop: props.skillsPadding, paddingBottom: props.skillsPadding };
  const centerSkillTitleStyle = { margin: '0', fontSize: '12px', fontWeight: 'bold',
    paddingTop: props.skillsPaddingLarger, paddingBottom: props.skillsPaddingLarger };
  const skillStyle = { margin: '0', fontSize: '12px', display: 'inline',
    fontWeight: 'bold', color: 'black'};

  return (
    <>
        <Title style={titleStyle} level={5}>
          {SKILLS.title}
        </Title>
        <hr style={props.separatorStyle} />
        <Paragraph style={skillTitleStyle}>
          <Paragraph style={skillStyle}>
            {SKILLS.programmingLanguages.title}
          </Paragraph>
          {getSkillsString(SKILLS.programmingLanguages.content)}
        </Paragraph>
        <Paragraph style={centerSkillTitleStyle}>
          <Paragraph style={skillStyle}>
            {SKILLS.tools.title}
          </Paragraph>
          {getSkillsString(SKILLS.tools.content)}
        </Paragraph>
        <Paragraph style={skillTitleStyle}>
          <Paragraph style={skillStyle}>
            {SKILLS.frameworks.title}
          </Paragraph>
          {getSkillsString(SKILLS.frameworks.content)}
        </Paragraph>
    </>
  );
}

export default Skills;
