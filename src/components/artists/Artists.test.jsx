import React from 'react';
import { shallow } from 'enzyme';
import Artists from './Artists';

describe('Artists component', () => {
  it('matches its snapshot', () => {
    const wrapper = shallow(<Artists artists={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
