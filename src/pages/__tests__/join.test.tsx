import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Join from '../join';
import '../../../test/__mocks__/intersectionObserverMock';

expect.extend(toHaveNoViolations);

describe('Join page', () => {
  it('renders correctly', () => {
    const { container } = render(<Join />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const pageContent = container.querySelector('main');

    expect(pageContent).toMatchSnapshot();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Join />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
