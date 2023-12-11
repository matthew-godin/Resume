import { Typography } from 'antd';
import { Link } from 'react-router-dom';
const { Paragraph } = Typography;

function Website(props) {
  return (
      <Link to='https://matthew-godin.com/' style={{textDecoration: 'none'}}>
        <span style={{verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0'}}>
          <Paragraph style={{fontSize: props.fontSize + 'px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'}}>matthew.godin.com</Paragraph>
        </span>
      </Link>
  );
}

export default Website;
