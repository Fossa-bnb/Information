import React from 'react';
import NumberViews from '../client/app/components/NumberViews';

describe('<NumberViews /> Component', () => {
  it('should render a div', () => {
    const wrapper = shallow(<NumberViews />);
    expect(wrapper.is('div')).toEqual(true);
  });
});
