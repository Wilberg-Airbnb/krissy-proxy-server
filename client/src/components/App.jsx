import React from 'react';
import Topbar from './Topbar.jsx'
import Nav from './Nav.jsx'
import StickyNav from './StickyMenu.jsx'


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
      <StickyNav/>
      </div>
    )
  }
}

export default AirBrb;
