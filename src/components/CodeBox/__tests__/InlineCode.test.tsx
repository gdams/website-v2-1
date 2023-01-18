import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import InlineCode from '../InlineCode';

describe('InlineCode component', (): void => {
  it('renders correctly', (): void => {
    const { container } = render(
      <InlineCode>
        This is some sample code
      </InlineCode>
    );
    expect(container).toMatchSnapshot();
  });
});