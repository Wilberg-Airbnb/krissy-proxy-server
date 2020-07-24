import React from 'react';
import Topbar from './Topbar.jsx'
import Nav from './Nav.jsx'
import StickyMenu from './StickyMenu.jsx'


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
      {/* <Nav/> */}
      <StickyMenu/>
      </div>
    )
  }
}

export default AirBrb;
