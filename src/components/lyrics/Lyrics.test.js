import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from './Lyrics';

describe('Lyrics component', () => {
  it('matches its snapshot', () => {
    const wrapper = shallow(<Lyrics match={{ params: { artistName: '', songTitle: '' }}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
