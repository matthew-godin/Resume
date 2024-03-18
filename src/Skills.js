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

  return (
    <>
        <Title
          style={{ fontSize: props.titleFontSize, margin: '0', paddingTop: '3%', paddingBottom: props.titleSecondaryPadding, fontWeight: 'bold', color: 'black' }}
          level={5}>
            {SKILLS.title}
        </Title>
        <hr style={props.hrStyle} />
        <Paragraph style={{ margin: '0', fontSize: '12px', fontWeight: 'bold', paddingTop: props.skillsPadding, paddingBottom: props.skillsPadding}}><Paragraph style={{ margin: '0', fontSize: '12px', display: 'inline', fontWeight: 'bold', color: 'black'}}>{SKILLS.programmingLanguages.title}</Paragraph>{getSkillsString(SKILLS.programmingLanguages.content)}</Paragraph>
        <Paragraph style={{ margin: '0', fontSize: '12px', fontWeight: 'bold', paddingTop: props.skillsPaddingLarger, paddingBottom: props.skillsPaddingLarger}}><Paragraph style={{ margin: '0', fontSize: '12px', display: 'inline', fontWeight: 'bold', color: 'black'}}>{SKILLS.tools.title}</Paragraph>{getSkillsString(SKILLS.tools.content)}</Paragraph>
        <Paragraph style={{ margin: '0', fontSize: '12px', fontWeight: 'bold', paddingTop: props.skillsPadding, paddingBottom: props.skillsPadding}}><Paragraph style={{ margin: '0', fontSize: '12px', display: 'inline', fontWeight: 'bold', color: 'black'}}>{SKILLS.frameworks.title}</Paragraph>{getSkillsString(SKILLS.frameworks.content)}</Paragraph>
    </>
  );
}

export default Skills;
