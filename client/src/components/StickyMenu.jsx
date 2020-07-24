import React, {Component, createRef} from 'react';
import { Sticky, Menu } from 'semantic-ui-react';

// const HoverItems= styled.p`
//   padding-top: 30px;
//   padding-botton:
// 	:hover {
// 		border-bottom: '1px solid #c6c6c6'
// 		cursor: pointer;
// 	}
// `


const displayBottomBorder = (e) => (
  e.target.style.borderBottom = '2px solid black'
)

class StickyMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      hover: false
    }
  }
  toHover() {
    this.setState({
      hover: true
    })
  }

  render(){
    return(

  <Menu compact>
  <Menu.Item href='#photos' onMouseEnter={displayBottomBorder}>Photos</Menu.Item>
  <Menu.Item href='#amenities'>Amenities</Menu.Item>
  <Menu.Item href='#review'>Reviews</Menu.Item>
  <Menu.Item href='#location'>Location</Menu.Item>
  </Menu>
    )
  }
    
  }

export default StickyMenu;

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