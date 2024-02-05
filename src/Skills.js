import { Typography } from 'antd';
const { Title, Paragraph } = Typography;

function Skills(props) {
  return (
    <>
        <Title style={{ fontSize: props.titleFontSize, margin: '0', paddingTop: '3%', paddingBottom: props.titleSecondaryPadding, fontWeight: 'bold', color: 'black' }} level={5}>Skills</Title>
        <hr style={props.hrStyle} />
        <Paragraph style={{ margin: '0', fontSize: '12px', fontWeight: 'bold', paddingTop: props.skillsPadding, paddingBottom: props.skillsPadding}}><Paragraph style={{ margin: '0', fontSize: '12px', display: 'inline', fontWeight: 'bold', color: 'black'}}>Programming Languages</Paragraph> - C# • TypeScript • JavaScript • SQL • Python • Go • C++ • C • Java • Swift • Kotlin • PHP</Paragraph>
        <Paragraph style={{ margin: '0', fontSize: '12px', fontWeight: 'bold', paddingTop: props.skillsPaddingLarger, paddingBottom: props.skillsPaddingLarger}}><Paragraph style={{ margin: '0', fontSize: '12px', display: 'inline', fontWeight: 'bold', color: 'black'}}>Tools</Paragraph> - Git • Bash • Powershell • Docker • VS Code • Visual Studio • IntelliJ • Android Studio • Xcode</Paragraph>
        <Paragraph style={{ margin: '0', fontSize: '12px', fontWeight: 'bold', paddingTop: props.skillsPadding, paddingBottom: props.skillsPadding}}><Paragraph style={{ margin: '0', fontSize: '12px', display: 'inline', fontWeight: 'bold', color: 'black'}}>Frameworks</Paragraph> - Node.js • Deno • React • Vue • ASP.NET • Laravel • PyTorch • Kafka • Spark • WebGL • Jest • NUnit • JUnit</Paragraph>
    </>
  );
}

export default Skills;
