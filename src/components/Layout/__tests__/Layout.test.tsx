import React from 'react';
import { render } from '@testing-library/react';
import '../../../../test/__mocks__/intersectionObserverMock';
import Layout from '..';

jest.mock('react-i18next', () => ({
    useTranslation: (): {} => ({ t: (key: string): string => key }),
    Trans: (): ReactElement => <></>,
  }));
  

jest.mock("@reach/router", () => {
    const RouterMocks = jest.requireActual("@reach/router");
    return {
      ...RouterMocks,
      useLocation: jest.fn().mockReturnValue({
        pathname: '/mock-path'
      })
    };
  });

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