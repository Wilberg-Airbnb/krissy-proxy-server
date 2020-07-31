import React from 'react';
import Topbar from './Topbar.jsx';
import StickyNav from './StickyNav.jsx';
import { Container, Grid } from 'semantic-ui-react';
import Footer from './Footer.jsx';

class AirBrb extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Topbar />
        <Container style={{ justifyContent: 'center', paddingBottom: '48px' }}>
          <Grid
            col={1}
            style={{
              paddingTop: '34px',
              paddingBottom: '0px',
              justifyContent: 'center',
            }}
          >
            <Grid.Row id={'photos'} style={{ padding: '0px' }} />
          </Grid>
        </Container>
        <StickyNav id={'nav'} />
        <Footer />
      </div>
    );
  }
}

export default AirBrb;
