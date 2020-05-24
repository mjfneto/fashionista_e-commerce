import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header', () => {
  test('renders logo', async () => {
    const { getByAltText } = render(<Header />);
    const logoImg = getByAltText('Fashionista logo');

    expect(logoImg).toBeInTheDocument();
  });

  test('renders icons', () => {
    const { getByTitle } = render(<Header />);
    const search = getByTitle('Busca por Produtos');
    const wishlist = getByTitle('Lista de Desejos');
    const shoppingBag = getByTitle('Bolsa de Compras');

    expect(search).toBeInTheDocument();
    expect(wishlist).toBeInTheDocument();
    expect(shoppingBag).toBeInTheDocument();
  });
});
