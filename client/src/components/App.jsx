import React from 'react';
import Topbar from './Topbar.jsx'
import StickyNav from './StickyNav.jsx'
import { Container, Grid } from 'semantic-ui-react';


class AirBrb extends React.Component {

  constructor(props) {
    super(props);
    
  }


  componentDidMount() {
  }

  render() {
    return(
      <div>
        <Topbar/>
        <Container style={{justifyContent: 'center', paddingBottom: '48px'}} >
          <Grid col={1} style={{ paddingTop: '34px', paddingBottom: '0px', justifyContent: 'center'}} onScroll={this.handleScroll}>
            <Grid.Row id={'photos'} style={{padding: '0px'}}/>
          </Grid>
        </Container>
      <StickyNav id={'nav'}/>
      </div>
    )
  }
}

export default AirBrb;
