import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import CodeBox from '../index';

Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn(),
  },
});

const navigatorClipboardSpy = vi.spyOn(navigator.clipboard, 'writeText');

afterEach(() => {
  vi.clearAllMocks();
});

describe('Codebox component', (): void => {
  it('renders correctly', (): void => {
    const textToCopy = <p>text to be copy</p>;
    const { container } = render(
      <CodeBox>
        {{
          props: {
            className: 'language-html',
            children: textToCopy,
          },
        }}
      </CodeBox>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders correctly', async () => {
    const textToCopy = <p>text to be copy</p>;

    render(
      <CodeBox>
        {{
          props: {
            className: 'language-html',
            children: textToCopy,
          },
        }}
      </CodeBox>
    );

    navigatorClipboardSpy.mockImplementationOnce(() => Promise.resolve());

    const buttonElement = screen.getByText('copy');
    userEvent.click(buttonElement);

    await screen.findByText('copied');

    expect(navigatorClipboardSpy).toHaveBeenCalledTimes(1);
    expect(navigatorClipboardSpy).toHaveBeenCalledWith(textToCopy.toString());
  });
});