import React from 'react';
import Topbar from './Topbar.jsx'
import Nav from './Nav.jsx'
import StickyNav from './StickyNav.jsx'


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
      <StickyNav/>
      </div>
    )
  }
}

export default AirBrb;
