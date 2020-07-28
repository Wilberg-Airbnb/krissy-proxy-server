import React from 'react';
import Topbar from './Topbar.jsx'
import StickyNav from './StickyMenu.jsx'
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
      <StickyNav id={'nav'}/>
       {/* <div id={'nav'}/> */}
       <Container style={{borderBottom: '1px solid #c6c6c6', justifyContent: 'center'}} >
          {/* <Grid col={1} style={{ paddingTop: '24px', paddingBottom: '0px', justifyContent: 'center'}}>
       
              <Grid.Row id={'photos'} style={{padding: '0px'}}/>
              <Grid.Row id={'photo-modal'} style={{padding: '0px'}}/>
        
      
          </Grid > */}
          {/* <Grid>
            <Grid.Column width={9}>
              <Grid.Row id={'description'}/>
              <Grid.Row id={'description-modal-root'}/>
              <Grid.Row id={'amenities'}/>
              <Grid.Row id={'calendar'}/>
            </Grid.Column>
            <Grid.Column width={7}>
            </Grid.Column>
          </Grid> */}
          <Grid col={1} style={{borderBottom: '1px solid #c6c6c6', justifyContent: 'center'}} >
            <Grid.Row style={{borderBottom: '1px solid #c6c6c6', padding: '0px 0px 48px 0px'}} id={'review'}/>
            <Grid.Row id='reviewmodal-root' style={{padding: '0px'}}/>
            <Grid.Row style={{borderBottom: '1px solid #c6c6c6', padding: '48px 0px'}} id={'location'}/>
            <Grid.Row style={{borderBottom: '1px solid #c6c6c6', padding: '48px 0px'}} id={'host'}/>
            <Grid.Row  id={'thingsToKnow'} style={{padding: '48px 0px'}}/>
            <Grid.Row id={'suggestions'}/>
            <Grid.Row id={'things-to-do-carousel'}/>
          </Grid>
        {/* </Grid> */}
      </Container>
      </div>
    )
  }
}

export default AirBrb;
