import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect } from "vitest"
import NavBar from '..';

describe('NavBar component', () => {
  it('navbar renders correctly', () => {
    const { container } = render(
      <NavBar/>
    );
    expect(container).toMatchSnapshot();
  });

  // navbar renders in mobile mode
  it('navbar renders in mobile mode', () => {
    window.innerWidth = 500;
    const { container } = render(
      <NavBar/>
    );
    // check if the menu-trigger is visible
    expect(container.querySelector('.menu-trigger')).toBeInTheDocument();

    // check if the nav is hidden
    expect(container.querySelector('.nav')).not.toHaveClass('active');

    // click the menu-trigger to open the menu
    const menuTrigger = screen.getByTestId('menu-trigger');
    fireEvent.click(menuTrigger);
    expect(container.querySelector('.nav')).toHaveClass('active');
    expect(container.querySelector('.nav .sub-menu')).not.toHaveClass('active');

    // open the Projects sub-menu
    const projectsLink = screen.getByText('Projects');
    expect(projectsLink).toBeInTheDocument();
    fireEvent.click(projectsLink);
  
    expect(container.querySelector('.nav .sub-menu')).toHaveClass('active');

    // click the menu-trigger to close the menu
    fireEvent.click(menuTrigger);
  });
});
