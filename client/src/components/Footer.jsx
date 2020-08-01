import React from 'react';
import { Grid } from 'semantic-ui-react';

const FooterContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative !important',
  zIndex: '1 !important',
  margin: 'auto',
  paddingTop: '10px',
  paddingBottom: '10px',
  width: '70%',
  fontSize: '12px',
  backgroundColor: 'rgb(247, 247, 247)'
};

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid.Row style={FooterContainer}>
        <div>
          <span>
            © 2020 Airbnb, Inc. All rights reserved·Privacy·Terms·Sitemap
          </span>
        </div>
        <div>
          <span>
            <i width={16} className="world icon" />
            <span style={{ marginRight: '2rem', textDecoration: 'underline' }}>
              English(US)
            </span>
            $
            <span style={{ marginRight: '3rem', textDecoration: 'underline' }}>
              USD
            </span>
            <i
              class="facebook icon"
              style={{ marginRight: '1rem', fontSize: '18px' }}
            ></i>
            <i
              class="twitter icon"
              style={{ marginRight: '1rem', fontSize: '18px' }}
            ></i>
            <i class="instagram icon" style={{ fontSize: '18px' }}></i>
          </span>
        </div>
      </Grid.Row>
    );
  }
}
export default Footer;
