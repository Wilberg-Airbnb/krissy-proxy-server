import React from 'react';
import AirBrb from '../components/App.jsx';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });
 
describe('Renders Components', () => {
  let component;
  beforeEach( () => {
    component = shallow(<AirBrb />)
  });

  test("should render initial layout", () => {
    const component = shallow(<AirBrb />);
    expect(component.getElements()).toMatchSnapshot();
  });


 
});
