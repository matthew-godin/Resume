import { Typography } from 'antd';
import Project from './Project';
import PROJECTS from '../constants/Projects';
const { Title } = Typography;

function Projects(props) {
  const titleStyle = { fontSize: props.titleFontSize, margin: '0', fontWeight: 'bold', color: 'black',
    paddingTop: props.titlePadding, paddingBottom: props.titleSecondaryPadding };

  return (
    <>
        <Title style={titleStyle} level={5}>{PROJECTS.title}</Title>
        <hr style={props.separatorStyle}/>
        {PROJECTS.content.map((project) =>
          <Project link={project.link} title={project.title} date={project.date}
            description={project.description + " (" + project.mention + ")"} skills={project.skills}
            mainPadding={props.mainPadding} projectTitleWeight={props.projectTitleWeight}
            projectDatesWeight={props.projectDatesWeight} descriptionStyle={props.descriptionStyle}
            projectSkillsWeight={props.projectSkillsWeight} />
        )}
    </>
  );
}

export default Projects;
