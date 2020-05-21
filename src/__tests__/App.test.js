import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App', () => {
  test('renders App', () => {
    const { getByText } = render(<App />);
    const app = getByText('App');
    expect(app).toBeInTheDocument();
  });
});
