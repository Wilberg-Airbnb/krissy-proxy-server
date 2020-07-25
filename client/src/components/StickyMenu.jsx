import React, {Component, createRef} from 'react';
import ReactDOM from 'react-dom';
import { Sticky, Menu, Segment } from 'semantic-ui-react';

const menuStyle = {
  padding: '0px 40px',
  borderTop: 'none'
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
      ReactDOM.createPortal(
  <div ref={this.contextRef}>
    <Sticky context={this.contextRef} style={{backgroundColor: '#fff'}}>
  <Menu attached='top' pointing secondary style={menuStyle}>
  <Menu.Item href='#photos' style={itemStyle} onMouseEnter={displayBottomBorder} onMouseLeave={noBorder}>Photos</Menu.Item>
  <Menu.Item href='#amenities' style={itemStyle} onMouseEnter={displayBottomBorder} onMouseLeave={noBorder} >Amenities</Menu.Item>
  <Menu.Item href='#review' style={itemStyle} onMouseEnter={displayBottomBorder} onMouseLeave={noBorder}>Reviews</Menu.Item>
  <Menu.Item href='#location' style={itemStyle} onMouseEnter={displayBottomBorder} onMouseLeave={noBorder}>Location</Menu.Item>
  </Menu>
  </Sticky>
  <Segment attached='bottom' id={'reservation'}></Segment>
  </div>,
  document.getElementById('nav'))
    );
  }
    
  }

export default StickyNav;
// ReactDOM.render(<StickyNav />, document.getElementById('nav'));

//   state = {}

//   handleItem

//   // contextRef = createRef();

//   return() {
//     <div >
//       <Sticky context={this.contextRef}>
//         <Menu
//           attached='top'
//           tabular
//           style={{backgroundColor: '#fff', paddingTop: '1em' }}>
//             <Menu.item as='a' name='Photos' href="#photos"/>
//             <Menu.item as='a' name='Amenities' href="#amenities"/>
//             <Menu.item as='a' name='Reivews' href="#reviews"/>
//             <Menu.item as='a' name='Location' href="#location"/>
//           </Menu>
//       </Sticky>
//     </div>
//   }

// };