import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Slack from '../slack';
import '../../../test/__mocks__/intersectionObserverMock';

expect.extend(toHaveNoViolations);

describe('Slack page', () => {
  it('renders correctly', () => {
    const { container } = render(<Slack />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const pageContent = container.querySelector('main');

    expect(pageContent).toMatchSnapshot();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Slack />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
