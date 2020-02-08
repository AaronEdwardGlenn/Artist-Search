import React from 'react';
import { shallow } from 'enzyme';
import SearchPage from './SearchPage';

describe('SearchPage component', () => {
  it('matches its snapshot', () => {
    const wrapper = shallow(<SearchPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
