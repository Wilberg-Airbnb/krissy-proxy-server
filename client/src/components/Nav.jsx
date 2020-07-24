import React from 'react';
// import { Container } from 'semantic-ui-react';

const serviceStyle = {
  fontSize: '14px'
};

const Nav = (props) => {
  return(
    
    <div style={serviceStyle} class="ui pointing menu">
      <a class="active item" href="#photos">
        Photos
      </a>
      <a class="item" href="#opening">
        Amenities
      </a>
      <a class="item" href="#review">
        Reviews
      </a>
      <a class="item" href="#location">
        Location
      </a>
      </div>
  )
};

export default Nav;