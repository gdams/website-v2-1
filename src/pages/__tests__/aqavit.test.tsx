import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import AQAvit from '../aqavit';
import '../../../test/__mocks__/intersectionObserverMock';

expect.extend(toHaveNoViolations);

describe('AQAvit page', () => {
  it('renders correctly', () => {
    const { container } = render(<AQAvit />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const pageContent = container.querySelector('main');

    expect(pageContent).toMatchSnapshot();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<AQAvit />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
