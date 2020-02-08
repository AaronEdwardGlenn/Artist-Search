import React from 'react';
import { shallow } from 'enzyme';
import Album from './Album';

describe('Album component', () => {
  it('matches its snapshot', () => {
    const wrapper = shallow(<Album match={{ params: { artistName: '', artistId: '', albumId: '' }}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
