import 'regenerator-runtime/runtime';
import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
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

  test('by clicking a Product in the Catalog, ProductPage is rendered', async () => {
    // Arrange
    const { getByTestId, queryAllByTestId } = render(
      <App />
    );
    const firstProduct = queryAllByTestId('product')[0];
    const productRouteName = firstProduct
      .querySelector('img')
      .alt.trim()
      .toLowerCase()
      .replace(/ /g, '-');

    // Act
    fireEvent.click(firstProduct);

    // Assert
    expect(window.location.pathname).toEqual(
      `/produto/${productRouteName}`
    );

    await waitFor(() => {
      const productPage = getByTestId('product-page');
      expect(productPage).toBeInTheDocument();
    });
  });

  test('by clicking the logo (aka "link to home"), ProductPage is removed and Catalog is rendered', async () => {
    const { getByTestId } = render(<App />);
    const homeLink = getByTestId('home-link');
    const productPage = getByTestId('product-page');

    // Act
    fireEvent.click(homeLink);

    expect(window.location.pathname).toEqual('/');

    await waitForElementToBeRemoved(
      productPage
    ).then((res) => expect(res).toBeTruthy());
  });
});
