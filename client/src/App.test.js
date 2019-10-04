import React from 'react';
import App from './App';
import { render } from '@testing-library/react'

test('renders without crashing', () => {
  render(<App />)
});

test('players are rendering', () => {
  const { getByTestId } = render(<App />);

  getByTestId(/player-card/i)
})

test('dark button rendering', () => {
  const { getByText } = render(<App />)

  getByText(/toggle dark/i)
})