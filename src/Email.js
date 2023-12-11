import { Typography } from 'antd';
import { Link } from 'react-router-dom';
const { Paragraph } = Typography;

function Email(props) {
  return (
      <Link to='mailto:matthew.godin.software.engineer@gmail.com' style={{textDecoration: 'none'}}>
        <span style={{verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0'}}>
          <Paragraph style={{fontSize: props.fontSize + 'px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'}}>matthew.godin.software.engineer@gmail.com</Paragraph>
        </span>
      </Link>
  );
}

export default Email;
