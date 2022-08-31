import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Index from '../index';
import '../../../test/__mocks__/intersectionObserverMock';

expect.extend(toHaveNoViolations);

describe('Index page', () => {
  it('renders correctly', () => {
    const { container } = render(<Index />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const pageContent = container.querySelector('main');

    expect(pageContent).toMatchSnapshot();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Index />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
