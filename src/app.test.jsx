import { React } from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';

test('renders a nav element with navigation role', async () => {
  const { container } = render(<App />);
  const nav = screen.getByRole('navigation');
  expect(nav).toBeInTheDocument();
});
