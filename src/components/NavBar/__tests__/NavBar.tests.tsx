import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '..';

jest.mock('react-i18next', () => ({
    useTranslation: (): {} => ({ t: (key: string): string => key }),
    Trans: (): ReactElement => <></>,
  }));

describe('NavBar component', () => {

  it('navbar renders correctly', () => {
    const { container } = render(
      <NavBar/>
    );
    expect(container).toMatchSnapshot();
  });

});