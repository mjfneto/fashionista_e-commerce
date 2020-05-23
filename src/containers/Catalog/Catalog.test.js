import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import mockData from '../../mockData/mockData';
import Catalog from './Catalog';

describe('Catalog container', () => {
  test('renders produtcs', async () => {
    const { findAllByTestId } = render(
      <Catalog products={mockData} />
    );
    const products = await findAllByTestId('product');

    expect(products).toHaveLength();
  });
});
