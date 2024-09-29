/*
Awash Adhikari
301424394
Web Application Development ( Sec.003 )
9/28/2024 (Last Updated)
*/




import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
