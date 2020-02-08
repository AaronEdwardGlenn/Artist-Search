import React from 'react';
import { shallow } from 'enzyme';
import Albums from './Albums';

describe('Albums component', () => {
  it('matches its snapshot', () => {
    const wrapper = shallow(<Albums match={{ params: { artistName: '', artistId: '' }}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
