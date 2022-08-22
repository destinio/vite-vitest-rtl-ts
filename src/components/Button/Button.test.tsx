import { render, screen, fireEvent } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { Button } from '.'
import userEvent from '@testing-library/user-event'

it('should render with text prop hello', async () => {
  const sayHello = vi.fn()

  render(<Button text="click me" clickHandler={sayHello} />)

  screen.debug()

  const button = screen.getByText(/click me/i)

  await userEvent.click(button)

  expect(sayHello).toBeCalledTimes(1)
})
