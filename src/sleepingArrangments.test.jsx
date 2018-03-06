import React from 'react';
import SleepingArrangments from '../client/app/components/SleepingArrangments';

describe('<SleepingArrangments /> Component', () => {
  it('should render a div', () => {
    const wrapper = shallow(<SleepingArrangments />);
    expect(wrapper.is('div')).toEqual(true);
  });
});
