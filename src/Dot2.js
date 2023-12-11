import { Typography } from 'antd';
const { Paragraph } = Typography;

function Dot1(props) {
  return (
    <span style={{verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0'}}>
      <Paragraph style={{fontSize: props.fontSize + 'px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: props.fontSize / 2 + 'px'}}>•</Paragraph>
    </span>
  );
}

export default Dot1;
