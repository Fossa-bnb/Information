import React from 'react';
import CancelPolicy from '../client/components/cancelPolicy';

describe('<CancelPolicy /> Component', () => {
  it('should render a div', () => {
    const wrapper = shallow(<CancelPolicy />);
    expect(wrapper.is('div')).toEqual(true);
  });
});
