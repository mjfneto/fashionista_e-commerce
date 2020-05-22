import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  test('renders App', () => {
    const { getByTestId } = render(<App />);
    const app = getByTestId('app');
    expect(app).toBeInTheDocument();
  });

  test('renders its immediate child container components', () => {
    const { getByTestId } = render(<App />);
    const header = getByTestId('header');
    const catalog = getByTestId('catalog');

    expect(header).toBeInTheDocument();
    expect(catalog).toBeInTheDocument();
  });
});
