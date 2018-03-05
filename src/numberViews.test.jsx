import React from 'react';
import NumberViews from '../client/components/numberViews';

describe('<NumberViews /> Component', () => {
  it('should render a div', () => {
    const wrapper = shallow(<NumberViews />);
    expect(wrapper.is('div')).toEqual(true);
  });
});
