import { Typography, Col, Row } from 'antd';
const { Title, Paragraph } = Typography;

function Experience(props) {
  return (
    <>
        <Title style={{ fontSize: props.titleFontSize, margin: '0', fontWeight: 'bold', color: 'black', paddingTop: props.titlePadding, paddingBottom: props.titleSecondaryPadding }} level={5}>Experience</Title>
        <hr style={props.hrStyle}/>
        <Row style={{paddingTop: props.mainPadding, paddingBottom: props.secondaryPadding}}>
          <Col style={props.jobTitleWeight} xs={12}>Software Developer - Ceridian <Paragraph style={props.jobCityStyle}>&ensp;Toronto, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={props.jobDatesWeight}>May 2022 - Present</Col>
        </Row>
        <Row style={{paddingBottom: props.secondarySecondaryPadding}}>
          <Col style={props.jobDescriptionStyle} xs={16}>Dayforce Candidate Management, Compensation Guidelines and Message Center</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: props.jobSkillsWeight}}>C# • ASP.NET • TypeScript • React • SQL</Col>
        </Row>
        <Row style={{paddingBottom: props.mainPadding}}>
          <Col xs={24}>
            <ul style ={{margin: '0', paddingInlineStart: '20px'}}>
              <li style={props.jobAdditionalInformationStyle}>Developed REST APIs and SQL Server queries performing sorts, filters, and business logic</li>
              <li style={props.jobAdditionalInformationStyle}>Developed LaunchDarkly APIs enabling the release of features to specific clients in a few clicks</li>
              <li style={props.jobAdditionalInformationStyle}>Revamped new and previous screens to follow the best accessibility standards thoroughly by conforming to WAI's WCAG 2.1</li>
              <li style={props.jobAdditionalInformationStyle}>Developed React grids that fetch and send data to the back end</li>
              <li style={props.jobAdditionalInformationStyle}>Developed interactive dialogs allowing the insertion of different tokens to send personalized reward letter messages</li>
            </ul>
          </Col>
        </Row>
        <Row style={{paddingTop: props.mainPadding, paddingBottom: props.secondaryPadding}}>
          <Col style={props.jobTitleWeight} xs={12}>Software Developer Intern - Ceridian <Paragraph style={props.jobCityStyle}>&ensp;Toronto, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={props.jobDatesWeight}>September 2021 - December 2021</Col>
        </Row>
        <Row style={{paddingBottom: props.secondarySecondaryPadding}}>
          <Col style={props.jobDescriptionStyle} xs={16}>Dayforce Reward Letters and Compensation Cycles</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: props.jobSkillsWeight}}>C# • ASP.NET • TypeScript • React • SQL</Col>
        </Row>
        <Row style={{paddingBottom: props.mainPadding}}>
          <Col xs={24}>
            <ul style ={{margin: '0', paddingInlineStart: '20px'}}>
              <li style={props.jobAdditionalInformationStyle}>Upgraded REST APIs to send additional data and developed new features such as Reward Letter Equity Details using IronPDF</li>
            </ul>
          </Col>
        </Row>
        <Row style={{paddingTop: props.mainPadding, paddingBottom: props.secondaryPadding}}>
          <Col style={props.jobTitleWeight} xs={12}>Software Developer Intern - Skillbook Academy <Paragraph style={props.jobCityStyle}>&ensp;Toronto, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={props.jobDatesWeight}>January 2021 - April 2021</Col>
        </Row>
        <Row style={{paddingBottom: props.secondarySecondaryPadding}}>
          <Col style={props.jobDescriptionStyle} xs={16}>Skillbook Academy's Website</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: props.jobSkillsWeight}}>PHP • Laravel • TypeScript • Vue • SQL</Col>
        </Row>
        <Row style={{paddingBottom: props.mainPadding}}>
          <Col xs={24}>
            <ul style ={{margin: '0', paddingInlineStart: '20px'}}>
              <li style={props.jobAdditionalInformationStyle}>Developed robust and secure REST APIs, MySQL tables normalized to BCNF, and Vue components that use Stripe's API</li>
            </ul>
          </Col>
        </Row>
        <Row style={{paddingTop: props.mainPadding, paddingBottom: props.secondaryPadding}}>
          <Col style={props.jobTitleWeight} xs={12}>Software Developer Intern - Virtek Vision <Paragraph style={props.jobCityStyle}>&ensp;Waterloo, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={props.jobDatesWeight}>June 2020 - August 2020</Col>
        </Row>
        <Row style={{paddingBottom: props.secondarySecondaryPadding}}>
          <Col style={props.jobDescriptionStyle} xs={16}>PDC 2020.08</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: props.jobSkillsWeight}}>C++ • ACIS • C# • WPF • Python</Col>
        </Row>
        <Row style={{paddingBottom: props.mainPadding}}>
          <Col xs={24}>
            <ul style ={{margin: '0', paddingInlineStart: '20px'}}>
              <li style={props.jobAdditionalInformationStyle}>Developed new features including Center Snap Mode and Projected Text, improved the installer and reduced the build time by 88%</li>
            </ul>
          </Col>
        </Row>
        <Row style={{paddingTop: props.mainPadding, paddingBottom: props.secondaryPadding}}>
          <Col style={props.jobTitleWeight} xs={12}>Software Developer Intern - Bentley Systems <Paragraph style={props.jobCityStyle}>&ensp;Burlington, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={props.jobDatesWeight}>September 2019 - December 2019</Col>
        </Row>
        <Row style={{paddingBottom: props.secondarySecondaryPadding}}>
          <Col style={props.jobDescriptionStyle} xs={16}>APM Mobile Inspections</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: props.jobSkillsWeight}}>C# • Xamarin • Android • iOS</Col>
        </Row>
        <Row style={{paddingBottom: props.mainPadding}}>
          <Col xs={24}>
            <ul style ={{margin: '0', paddingInlineStart: '20px'}}>
              <li style={props.jobAdditionalInformationStyle}>Developed dark mode, ability to scan distant barcodes by improving the Zxing.Net.Mobile library and Collection Requirements feature</li>
            </ul>
          </Col>
        </Row>
        <Row style={{paddingTop: props.mainPadding, paddingBottom: props.secondaryPadding}}>
          <Col style={props.jobTitleWeight} xs={14}>Software Developer Intern - Netint Technologies <Paragraph style={props.jobCityStyle}>&ensp;Markham, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={6} style={props.jobDatesWeight}>January 2019 - April 2019</Col>
        </Row>
        <Row style={{paddingBottom: props.secondarySecondaryPadding}}>
          <Col style={props.jobDescriptionStyle} xs={16}>Codensity T408 SSD Automated Tests</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: props.jobSkillsWeight}}>Python • NVMe</Col>
        </Row>
        <Row style={{paddingBottom: props.mainPadding}}>
          <Col xs={24}>
            <ul style ={{margin: '0', paddingInlineStart: '20px'}}>
              <li style={props.jobAdditionalInformationStyle}>Developed automated tests that validate random and sequential read/write operations</li>
            </ul>
          </Col>
        </Row>
        <Row style={{paddingTop: props.mainPadding, paddingBottom: props.secondaryPadding}}>
          <Col style={props.jobTitleWeight} xs={12}>Software Developer Intern - Wind River Systems <Paragraph style={props.jobCityStyle}>&ensp;Ottawa, ON</Paragraph></Col>
          <Col xs={4}></Col>
          <Col xs={8} style={props.jobDatesWeight}>May 2018 - August 2018</Col>
        </Row>
        <Row style={{paddingBottom: props.secondarySecondaryPadding}}>
          <Col style={props.jobDescriptionStyle} xs={16}>Titanium Cloud Infrastructure</Col>
          <Col xs={8} style={{textAlign: 'right', fontSize: '11px', fontWeight: props.jobSkillsWeight}}>Python • Grafana • InfluxDB</Col>
        </Row>
        <Row style={{paddingBottom: props.mainPadding}}>
          <Col xs={24}>
            <ul style ={{margin: '0', paddingInlineStart: '20px'}}>
              <li style={props.jobAdditionalInformationStyle}>Developed dashboards tracking network performance and process counts in real time</li>
            </ul>
          </Col>
        </Row>
    </>
  );
}

export default Experience;
