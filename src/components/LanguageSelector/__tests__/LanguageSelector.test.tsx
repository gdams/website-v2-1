import React from 'react';
import { render } from '@testing-library/react';
import LanguageSelector from '..';

describe('DocumentationCard component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <LanguageSelector />
    );
    expect(container).toMatchSnapshot();
  });
});