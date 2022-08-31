import React from 'react';
import { render } from '@testing-library/react';
import '../../../../test/__mocks__/intersectionObserverMock';
import Layout from '..';

describe('Layout component', () => {
  it('renders correctly with data', () => {
    const { container } = render(
      <Layout>
        mock-children
      </Layout>
    );
    expect(container).toMatchSnapshot();
  });
});