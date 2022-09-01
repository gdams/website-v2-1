import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Download from '../download';
import '../../../test/__mocks__/intersectionObserverMock';

expect.extend(toHaveNoViolations);

describe('Download page', () => {
  it('renders correctly', () => {
    const { container } = render(<Download location="https://fake-download.tar.gz" />);
    // eslint-disable-next-line
    const pageContent = container.querySelector('main');

    expect(pageContent).toMatchSnapshot();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Download location="https://fake-download.tar.gz" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
