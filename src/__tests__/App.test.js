import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App', () => {
  test('renders App', () => {
    const { getByTestId } = render(<App />);
    const app = getByTestId('app');
    expect(app).toBeInTheDocument();
  });

  test('renders Header', () => {
    const { getByTestId } = render(<App />);
    const headerNode = getByTestId('header');
    expect(headerNode).toBeInTheDocument();
  });
});
