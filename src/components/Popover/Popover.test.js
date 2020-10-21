import React from 'react';
import { shallow } from 'enzyme';

import Popover from './Popover';

const render = (props) => shallow(<Popover {...props} />);

const items = [
  { src: 'avatar1.png', label: 'Avatar 1', id: 1 },
  { src: 'avatar2.png', label: 'Avatar 2', id: 2 },
  { src: 'avatar3.png', label: 'Avatar 3', id: 3 },
  { src: 'avatar4.png', label: 'Avatar 4', id: 4 },
  { src: 'avatar5.png', label: 'Avatar 5', id: 5 },
  { src: 'avatar6.png', label: 'Avatar 6', id: 6 },
];
const selected = 1;
const loading = 2;

describe('Popover', () => {
  it('should display the same amount of AvatarImage(s) as objects passed to items array', () => {
    const wrapper = render({ items, selected, loading });

    expect(wrapper.find('li').length).toEqual(6);
  });

  it('should have the first li selected with the class .AvatarImageItemSelected', () => {
    const wrapper = render({ items, selected, loading });

    expect(
      wrapper.find('.AvatarImageItemSelected').find('AvatarImage').prop('id'),
    ).toEqual(1);
  });

  it('should render correctly', () => {
    expect(
      render({ items, selected, loading }).getElements(),
    ).toMatchSnapshot();
  });
});
