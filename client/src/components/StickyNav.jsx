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

function fadeIn(el, time) {
  el.style.opacity = 0;

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / time;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

class StickyNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
      scroll: 0,
      faded: false
    };
    this.contextRef = React.createRef();
    this.scroll = this.scroll.bind(this);
  }

  scroll(){
    this.setState({
      showNav: true
    });
   
  }

  componentDidMount() {
    window.addEventListener('scroll', (e)=> {
      this.setState({
        scroll: window.scrollY,
      })

      if (window.scrollY > 2165 && this.state.faded === false) {
        var mini = document.getElementById("reservation-mini");
        fadeIn(mini, 500)
        this.setState({faded: true});
      }

      if (window.scrollY < 2165 && this.state.faded === true) {
        this.setState({faded: false});
      }
    }, true);
  }

  render(){
    return (
      <div ref={this.contextRef}>
        {this.state.scroll > 690 ?
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
        : null
      }
      {
        this.state.scroll > 2165 ?
        <Sticky context={this.contextRef} attach="top" style={{margin: "300px 200px 0px 66%"}} onClick={() => window.scrollTo(0, 1630)}><div id='reservation-mini' style={{marginTop: "10px"}}></div></Sticky>
        : <Sticky context={this.contextRef} attach="top" style={{display: "none"}} ><div id='reservation-mini' style={{marginTop: "10px"}}></div></Sticky>

      }
        <BelowSticky scroll={this.scroll}/>
        </div>)
      }

}

export default StickyNav;

