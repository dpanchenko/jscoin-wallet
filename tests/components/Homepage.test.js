import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from 'app/containers/Homepage';

describe('<Homepage />', () => {
  it('should render', () => {
    const rendered = shallow(
      <Homepage wallet="test" />,
    );
    expect(rendered.html()).toBe('<div class="container">Homepage test</div>');
  });
});
