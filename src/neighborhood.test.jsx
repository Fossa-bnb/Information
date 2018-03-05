import React from 'react';
import Neighborhood from '../client/components/neighborhood';

describe('<Neighborhood /> Component', () => {
  it('should render a title', () => {
    const wrapper = shallow(<Neighborhood />);
    expect(wrapper.is('div')).toEqual(true);
  });
});
