import React from 'react';
import RoomDescription from '../client/components/roomDescription';

describe('<RoomDescription /> Component', () => {
  it('should render a div ', () => {
    const wrapper = shallow(<RoomDescription />);
    expect(wrapper.is('div')).toEqual(true);
  });
});
