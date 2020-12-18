import { render } from '@redwoodjs/testing'

import TestingPage from './TestingPage'

describe('TestingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TestingPage />)
    }).not.toThrow()
  })
})
