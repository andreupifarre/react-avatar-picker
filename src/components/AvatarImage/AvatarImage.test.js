import React from 'react';
import { shallow } from 'enzyme';

import AvatarImage from './AvatarImage';

const render = (props) => shallow(<AvatarImage {...props} />);

describe('AvatarImage', () => {
  it('should show the properties passed to the component, on the image', () => {
    const item = {
      src: 'avatar1.png',
      label: 'Avatar 1',
      id: 1,
      onClick: () => {},
    };

    const wrapper = render({ ...item });
    const image = wrapper.find('img');

    expect(image.prop('src')).toEqual('/img/' + item.src);
    expect(image.prop('alt')).toEqual(item.label);

    wrapper.simulate('click');
  });

  it('should render correctly', () => {
    expect(render().getElements()).toMatchSnapshot();
  });
});
