import React from 'react';
import CancelPolicy from '../client/app/components/CancelPolicy';

describe('<CancelPolicy /> Component', () => {
  it('should render a div', () => {
    const wrapper = shallow(<CancelPolicy room="" />);
    expect(wrapper.is('div')).toEqual(true);
  });
  it('renders the Cancel Policy paragraph given', () => {
    const room = { cancelPolicy: 'Cancel Policy is...' };
    const wrapper = shallow(<CancelPolicy room={room} />);
    expect(wrapper.find('p').text()).toEqual('Cancel Policy is...');
  });
});
