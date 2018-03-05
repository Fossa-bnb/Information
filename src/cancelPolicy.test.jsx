import React from 'react';
import CanclePolicy from '../client/components/cancelPolicy';

describe('<CanclePolicy /> Component', () => {
  it('should render a div', () => {
    const wrapper = shallow(<CanclePolicy />);
    expect(wrapper.is('div')).toEqual(true);
  });
});
