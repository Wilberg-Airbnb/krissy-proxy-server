import React, {Component, createRef} from 'react';
import { Sticky, Menu, Segment, Grid } from 'semantic-ui-react';
import BelowSticky from './BelowSticky.jsx';

const menuStyle = {
  padding: '0px 40px',
  borderTop: 'none',
  backgroundColor: '#fff',
  zIndex: '50'
};

const hidden = {
  display: 'none'
}

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
    this.state = {
      showNav: false
    };
    this.contextRef = React.createRef();
    this.scroll = this.scroll.bind(this);
  }

  scroll(){
    this.setState({
      showNav: true
    });
   
  }

  render(){
    return (
      <div ref={this.contextRef}>
        <Sticky context={this.contextRef} style={{backgroundColor: '#fff'}}>
        {/* <Sticky context={this.contextRef} style={{backgroundColor: '#fff', display: this.state.showNav ?'inline' : 'none'}}> */}
          <Menu attached='top' pointing secondary style={menuStyle}>
          {/* <Menu attached='top' pointing secondary style={{padding: '0px 40px', borderTop: 'none', backgroundColor: '#fff', display: this.state.showNav ?'none' : 'inline'}}> */}
          <Menu.Item href='#photos' style={itemStyle} onMouseEnter={displayBottomBorder} onMouseLeave={noBorder}>Photos</Menu.Item>
          <Menu.Item href='#amenities' style={itemStyle} onMouseEnter={displayBottomBorder} onMouseLeave={noBorder} >Amenities</Menu.Item>
          <Menu.Item href='#review' style={itemStyle} onMouseEnter={displayBottomBorder} onMouseLeave={noBorder}>Reviews</Menu.Item>
          <Menu.Item href='#location' style={itemStyle} onMouseEnter={displayBottomBorder} onMouseLeave={noBorder}>Location</Menu.Item>
          </Menu>
        </Sticky>
        <BelowSticky scroll={this.scroll}/>
        </div>)
      }

}

export default StickyNav;
