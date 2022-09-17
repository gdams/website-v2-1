import React from 'react';
import { render } from '@testing-library/react';
import AllReleaseNotesPages from '../../templates/releaseNotesTemplate';
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe';
import { createReleaseNoteData } from '../../__fixtures__/page';

let mockData = createReleaseNoteData();

describe('ReleaseNote pages', () => {
  it('renders correctly', () => {
    const { container } = render(<AllReleaseNotesPages pageContext={{version: '1.0.0'}} data={mockData} />);
    // eslint-disable-next-line
    const pageContent = container.querySelector('main');

    expect(pageContent).toMatchSnapshot();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<AllReleaseNotesPages pageContext={{version: '1.0.0'}} data={mockData} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});