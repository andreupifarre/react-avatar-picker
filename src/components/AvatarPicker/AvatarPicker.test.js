import React from 'react';
import { shallow } from 'enzyme';
import AvatarPicker from './AvatarPicker';

const wrapper = shallow(<AvatarPicker />);

describe('AvatarPicker', () => {
  it('should contain a AvatarImage component', () => {
    expect(wrapper.find('AvatarImage').exists()).toBeTruthy();
  });

  it('should contain a Popover component', () => {
    expect(wrapper.find('Popover').exists()).toBeTruthy();
  });

  it('should render correctly', () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});
