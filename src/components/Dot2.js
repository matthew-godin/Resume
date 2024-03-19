import { Typography } from 'antd';
const { Paragraph } = Typography;

function Dot2(props) {
  const paragraphStyle = {fontSize: props.fontSize + 'px', padding: '0', margin: '0',
    color: 'white', fontWeight: 'bold', marginLeft: props.fontSize / 2 + 'px'};

  return (
    <span style={props.spanStyle}>
      <Paragraph style={paragraphStyle}>•</Paragraph>
    </span>
  );
}

export default Dot2;
