import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './popup/Popup';
import '@testing-library/jest-dom';
   
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
    }
  }
}
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
