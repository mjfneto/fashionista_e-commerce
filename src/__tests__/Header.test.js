import 'regenerator-runtime/runtime';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../containers/Header';

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

    screen.debug(search);
    screen.debug(wishlist);
    screen.debug(shoppingBag);

    expect(search).toBeInTheDocument();
    expect(wishlist).toBeInTheDocument();
    expect(shoppingBag).toBeInTheDocument();
  });
});
