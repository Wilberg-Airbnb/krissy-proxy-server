import React, {Component, createRef} from 'react';
import { Sticky, Menu } from 'semantic-ui-react';
import Nav from './Nav.jsx';

export default class StickyNav extends Component {

  // contextRef = createRef();

  return() {
    <div >
      <Sticky context={this.contextRef}>
        <Menu
          attached='top'
          tabular
          style={{backgroundColor: '#fff', paddingTop: '1em' }}>
            <Menu.item as='a' name='Photos' href="#photos"/>
            <Menu.item as='a' name='Amenities' href="#amenities"/>
            <Menu.item as='a' name='Reivews' href="#reviews"/>
            <Menu.item as='a' name='Location' href="#location"/>
          </Menu>
      </Sticky>
    </div>
  }

};