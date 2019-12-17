import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

test('renders without crashing', () => {
  render(<App />)
});

test('dark button rendering', () => {
  const { getByText } = render(<App />)

  getByText(/toggle dark/i)
})

test('players are rendering', () => {
  const { getByTestId } = render(<App />);

  getByTestId(/player-card/i)
})

test('World Cup Image Appears', () => {
  const { getByAltText } = render(<App />);

  getByAltText(/world-cup-img/i)
})
