import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Awesome link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Awesome/i);
  expect(linkElement).toBeInTheDocument();
});
