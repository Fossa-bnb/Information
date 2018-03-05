import React from 'react';
import numberViews from '../client/components/numberViews';

describe('<numberViews /> Component', () => {
  it('should render a div', () => {
    const wrapper = shallow(<numberViews />);
    expect(wrapper.is('div')).toEqual(true);
  });
});
