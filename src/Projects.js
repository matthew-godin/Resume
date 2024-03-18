import { Typography } from 'antd';
import Project from './Project';
import PROJECTS from './constants/Projects';
const { Title } = Typography;

function Projects(props) {
  return (
    <>
        <Title
          style={{ fontSize: props.titleFontSize, margin: '0', fontWeight: 'bold', color: 'black', paddingTop: props.titlePadding, paddingBottom: props.titleSecondaryPadding}}
          level={5}>
            {PROJECTS.title}
        </Title>
        <hr style={props.hrStyle}/>
        {PROJECTS.content.map((project) =>
          <Project link={project.link} title={project.title} date={project.date}
            description={project.description + " (" + project.mention + ")"} skills={project.skills}
            mainPadding={props.mainPadding} projectTitleWeight={props.projectTitleWeight}
            projectDatesWeight={props.projectDatesWeight} jobDescriptionStyle={props.jobDescriptionStyle}
            projectSkillsWeight={props.projectSkillsWeight} />
        )}
    </>
  );
}

export default Projects;
