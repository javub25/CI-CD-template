import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

function setup() {
  const user = userEvent.setup()
  render(<App />)
  return {
    user,
    count: () => screen.getByTestId('count'),
    increment: () => screen.getByRole('button', { name: 'Increment' }),
    decrement: () => screen.getByRole('button', { name: 'Decrement' }),
    reset: () => screen.getByRole('button', { name: 'Reset' }),
  }
}

describe('Counter', () => {
  it('starts at 0', () => {
    const { count } = setup()
    expect(count()).toHaveTextContent('0')
  })

  it('increments the count', async () => {
    const { user, count, increment } = setup()
    await user.click(increment())
    await user.click(increment())
    expect(count()).toHaveTextContent('2')
  })

  it('decrements the count', async () => {
    const { user, count, increment, decrement } = setup()
    await user.click(increment())
    await user.click(increment())
    await user.click(decrement())
    expect(count()).toHaveTextContent('1')
  })

  it('resets the count to 0', async () => {
    const { user, count, increment, reset } = setup()
    await user.click(increment())
    await user.click(increment())
    await user.click(reset())
    expect(count()).toHaveTextContent('0')
  })

  it('never goes below 0', async () => {
    const { user, count, decrement } = setup()
    expect(decrement()).toBeDisabled()
    await user.click(decrement())
    expect(count()).toHaveTextContent('0')
  })
})
