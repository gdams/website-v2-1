import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from "vitest"
import NavBar from '..';

describe('NavBar component', () => {
  it('navbar renders correctly', () => {
    const { container } = render(
      <NavBar/>
    );
    expect(container).toMatchSnapshot();
  });

  it('blog navbar renders correctly', () => {
    global.window = Object.create(window);
    const url = 'https://adoptium.net/blog';
    Object.defineProperty(window, 'location', {
      value: {
        href: url
      }
    });

    const { container } = render(
      <NavBar/>
    );
    expect(container).toMatchSnapshot();
  });
});
