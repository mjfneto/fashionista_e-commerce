import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import mockData from '../../mockData/mockData';
import Catalog from './Catalog';

describe('Catalog container', () => {
  test('renders multiple instances of the Product component', () => {
    const { queryAllByTestId } = render(
      <Catalog products={mockData} />
    );
    const products = queryAllByTestId('product');

    expect(products.length).toBeTruthy();
  });
});
