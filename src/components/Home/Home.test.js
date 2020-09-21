import React from 'react'
import Home from './Home'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('should display the correct elements when rendered', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Home /> 
      </MemoryRouter>
    )

    const welcomeMessage = getByRole('heading', { name: /do for you today/i })
    const iCanDoMessage = getByRole('heading', { name: /i can help/i })
    const activityButton = getByRole('button', { name: /find an activity/i })
    const journalButton = getByRole('button', { name: /look at my journal/i })
    
    expect(welcomeMessage).toBeInTheDocument()
    expect(iCanDoMessage).toBeInTheDocument()
    expect(activityButton).toBeInTheDocument()
    expect(journalButton).toBeInTheDocument()
  })
})