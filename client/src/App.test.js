import { render, screen } from '@testing-library/react';
import App from './App';

test('renders client', () => {
  render(<App />);
  const linkElement = screen.getByText(/New PO/i);
  expect(linkElement).toBeInTheDocument();
});
