import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

const BelowSticky = () =>  (
  <Container style={{borderBottom: '1px solid #c6c6c6', justifyContent: 'center'}} >
  <Grid col={1} style={{ paddingTop: '24px', paddingBottom: '0px', justifyContent: 'center'}}>
    <Grid.Row id={'photos'} style={{padding: '0px'}}/>
    <Grid.Row id={'photo-modal'} style={{padding: '0px'}}/>
  </Grid >
  <Grid>
    <Grid.Column width={9}>
      <Grid.Row id={'description'}/>
      <Grid.Row id={'description-modal-root'}/>
      <Grid.Row id={'amenities'}/>
      <Grid.Row id={'calendar'}/>
    </Grid.Column>
    <Grid.Column width={7}/>
  </Grid>
  </Container>
)

export default BelowSticky;