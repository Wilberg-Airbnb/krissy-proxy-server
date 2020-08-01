import React, {Component, createRef} from 'react';
import { Container, Grid, Rail, Ref, Sticky, Segment } from 'semantic-ui-react';
import Explore from './Explore.jsx'
import Footer from './Footer.jsx';
import InformationStatic from './InformationStatic.jsx';

class BelowSticky extends React.Component {

  constructor(props) {
    super(props);
    this.contextRef = createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e) {
    let element = e.target;
    console.log(element);
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      this.props.scroll();
    }
  }

  render() {
    return(
      <Container style={{justifyContent: 'center', paddingBottom: '48px'}} >
        <Grid style={{borderBottom: '1px solid #c6c6c6', paddingBottom: '48px'}}>
          <Grid.Column width={10}>
            <Ref innerRef={this.contextRef}>
              <div style={{border: 'none', paddingTop: '48px'}}>
                <Grid.Row id={'description'}/>
                <Grid.Row id={'description-modal-root'}/>
                <Grid.Row id={'amenities'}/>
                <Grid.Row id={'reservation-calendar'} style={{paddingTop: '48px', borderTop: '1px solid #c6c6c6'}}/>
                <Rail position='right'style={{paddingTop: '68px', zIndex: '20'}}>
                  <Sticky context={this.contextRef} offset={100}>
                    <div id={'reservation'}/>
                    <div id={'reservation-widget'} style={{backgroundColor: 'rgb(255,255,255)', position: 'relative'}}/>
                  </Sticky>
                </Rail>
              </div>
            </Ref>
          </Grid.Column>
          <Grid.Column width={6}/>
        </Grid>
        <Grid col={1} style={{justifyContent: 'center'}} >
          <Grid.Row id={'review'} style={{borderBottom: '1px solid #c6c6c6', padding: '48px 0px 48px 0px'}} />
          <Grid.Row id='reviewmodal-root' style={{padding: '0px'}}/>
          <Grid.Row id={'location'} style={{borderBottom: '1px solid #c6c6c6', padding: '48px 0px'}} />
          <Grid.Row id={'host'} style={{borderBottom: '1px solid #c6c6c6', padding: '48px 0px'}} />
          <Grid.Row id={'thingsToKnow'} style={{padding: '48px 0px 0px 0px', marginBottom: '-55px'}}/>
          <Grid.Row id={'suggestions'} style={{borderBottom: '1px solid #c6c6c6', paddingBottom: '0px', marginBottom: '-50px'}}/>
          <Grid.Row id={'things-to-do-carousel'} style={{padding: '48px 0px 18px 0px', marginBottom: '-60px'}}/>
          <Explore/>
          <InformationStatic />
          <Footer />
        </Grid>
      </Container>
    )
  }
}

export default BelowSticky;