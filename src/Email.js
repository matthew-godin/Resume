import { Typography } from 'antd';
import { Link } from 'react-router-dom';
const { Paragraph } = Typography;

function Email(props) {
  return (
      <Link to={props.link} style={{textDecoration: 'none'}}>
        <span style={{verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0'}}>
          <Paragraph style={{fontSize: props.fontSize + 'px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'}}>{props.email}</Paragraph>
        </span>
      </Link>
  );
}

export default Email;
