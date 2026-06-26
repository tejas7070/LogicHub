import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Vedic Lores heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Vedic Lores/i);
  expect(headingElement).toBeInTheDocument();
});
