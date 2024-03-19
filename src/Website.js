import { Typography } from 'antd';
import { Link } from 'react-router-dom';
const { Paragraph } = Typography;

function Website(props) {
  return (
      <Link to={props.link} style={{textDecoration: 'none'}}>
        <span style={props.spanStyle}>
          <Paragraph style={props.paragraphStyle}>{props.website}</Paragraph>
        </span>
      </Link>
  );
}

export default Website;
