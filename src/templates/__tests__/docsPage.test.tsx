import React from 'react';
import { render } from '@testing-library/react';
import DocsPage, { Head } from '../docsPage';
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe';
import { createMDXDocsData } from '../../__fixtures__/page';

let mockData = createMDXDocsData(false);
const pageContext = {
  relativePath: 'docs/sample/index.md',
}

describe('Docs Template page', () => {
  it('renders correctly', () => {
    const { container } = render(<DocsPage data={mockData} pageContext={pageContext} children={'sample docs'} />);
    // eslint-disable-next-line
    const pageContent = container.querySelector('main');

    expect(pageContent).toMatchSnapshot();
  });

  it('toc renders correctly', () => {
    let mockData = createMDXDocsData(true);
    const { container } = render(<DocsPage data={mockData} pageContext={pageContext} children={'sample docs'} />);
    // eslint-disable-next-line
    const pageContent = container.querySelector('main');

    expect(pageContent).toMatchSnapshot();
  });

  it('head renders correctly', () => {
    const { container } = render(<Head data={mockData} />);
    // eslint-disable-next-line
    const title = container.querySelector('title');
    expect(title?.textContent).toEqual('MDX Doc Page title | Adoptium');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<DocsPage data={mockData} pageContext={pageContext} children={'sample docs'} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});