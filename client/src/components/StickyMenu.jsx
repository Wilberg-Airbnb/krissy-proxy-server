import React, {Component, createRef} from 'react';
import ReactDOM from 'react-dom';
import { Sticky, Menu, Segment, Grid } from 'semantic-ui-react';
import BelowSticky from './BelowSticky.jsx';

const menuStyle = {
  padding: '0px 40px',
  borderTop: 'none',
  backgroundColor: '#fff'
};

const itemStyle={
  paddingTop: '30px',
  paddingBottom: '30px'
}

const displayBottomBorder = (e) => (
  e.target.style.borderBottom = '2px solid black'
)

const noBorder =(e) => {
   e.target.style.borderBottom = 'none'
}

class StickyNav extends React.Component {

  constructor(props) {
    super(props);
    this.contextRef = React.createRef();
  }

  render(){
    return (
      <div ref={this.contextRef}>
        <Sticky context={this.contextRef} style={{backgroundColor: '#fff'}}>
          <Menu attached='top' pointing secondary style={menuStyle}>
          <Menu.Item href='#photos' style={itemStyle} onMouseEnter={displayBottomBorder} onMouseLeave={noBorder}>Photos</Menu.Item>
          <Menu.Item href='#amenities' style={itemStyle} onMouseEnter={displayBottomBorder} onMouseLeave={noBorder} >Amenities</Menu.Item>
          <Menu.Item href='#review' style={itemStyle} onMouseEnter={displayBottomBorder} onMouseLeave={noBorder}>Reviews</Menu.Item>
          <Menu.Item href='#location' style={itemStyle} onMouseEnter={displayBottomBorder} onMouseLeave={noBorder}>Location</Menu.Item>
          </Menu>
          </Sticky>
        <BelowSticky attached='attached'/>
          {/* </Segment> */}
   
        </div>)
      }




  //     ReactDOM.createPortal(
  // <div ref={this.contextRef}>
  //   <Sticky context={this.contextRef} style={{backgroundColor: '#fff'}}>
  // <Menu attached='top' pointing secondary style={menuStyle}>
  // <Menu.Item href='#photos' style={itemStyle} onMouseEnter={displayBottomBorder} onMouseLeave={noBorder}>Photos</Menu.Item>
  // <Menu.Item href='#amenities' style={itemStyle} onMouseEnter={displayBottomBorder} onMouseLeave={noBorder} >Amenities</Menu.Item>
  // <Menu.Item href='#review' style={itemStyle} onMouseEnter={displayBottomBorder} onMouseLeave={noBorder}>Reviews</Menu.Item>
  // <Menu.Item href='#location' style={itemStyle} onMouseEnter={displayBottomBorder} onMouseLeave={noBorder}>Location</Menu.Item>
  // </Menu>
  // </Sticky>
  // {/* <Grid attached='bottom' style={{borderBottom: '1px solid black'}}>
  //   {/* <Grid.Row  id={'reservation'}/> */}
  //       {/* <Grid.Colunn floated='right' id={'reservation'}/> */}
  //       {/* <Grid.Column floated='left'>
  //         <Grid.Row  id={'description'}/>
  //         <Grid.Row  id={'description-modal-root'}/>
  //       </Grid.Column>
  //   <Grid.Row  id={'amenities'}/> */}
  // {/* </Grid> */} */}
  // </div>,
  // document.getElementById('nav'))
  //   );
  // }
    
}

export default StickyNav;

