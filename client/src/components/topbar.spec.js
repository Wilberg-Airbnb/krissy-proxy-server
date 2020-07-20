import React from 'react';
import Topbar from '../components/Topbar.jsx';


import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });
 
describe('Renders Components', () => {
  let component;
  beforeEach( () => {
    component = shallow(<Topbar />)
  });

  test("should render initial layout", () => {
    const component = shallow(<Topbar />);
    expect(component.getElements()).toMatchSnapshot();
  });

  test("should create a map in component state", ()=> {
    expect(component.contains(<Topbar />)).toBe(false)
  });

 
});
