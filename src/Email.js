import { Typography } from 'antd';
import { Link } from 'react-router-dom';
const { Paragraph } = Typography;

function Email(props) {
  return (
      <Link to={props.link} style={{textDecoration: 'none'}}>
        <span style={props.spanStyle}>
          <Paragraph style={props.paragraphStyle}>{props.email}</Paragraph>
        </span>
      </Link>
  );
}

export default Email;
