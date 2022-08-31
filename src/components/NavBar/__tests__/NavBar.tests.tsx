import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '..';

describe('NavBar component', () => {

  it('navbar renders correctly', () => {
    const { container } = render(
      <NavBar/>
    );
    expect(container).toMatchSnapshot();
  });

});