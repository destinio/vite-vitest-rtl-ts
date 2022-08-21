import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

test('App', async () => {
  render(<App />)
  await screen.findByText(/hello/i)
})
