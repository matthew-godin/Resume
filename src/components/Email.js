import { Typography } from 'antd';
import { Link } from 'react-router-dom';
const { Paragraph } = Typography;

function Email(props) {
  const paragraphStyle = {fontSize: props.fontSize + 'px', padding: '0', margin: '0',
    color: 'white', fontWeight: 'bold'};

  return (
      <Link to={props.link} style={{textDecoration: 'none'}}>
        <span style={props.spanStyle}>
          <Paragraph style={paragraphStyle}>{props.email}</Paragraph>
        </span>
      </Link>
  );
}

export default Email;
