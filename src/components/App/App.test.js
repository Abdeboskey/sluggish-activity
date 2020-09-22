import React from 'react'
import App from './App'
import { fireEvent, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

describe('App', () => {

  it('Should display the home component when first rendered', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )    
    
    const homeHeading = getByRole('heading', { name: /what can i do for you today/i })
    
    expect(homeHeading).toBeInTheDocument()
  })
  
  it('Should display the TextBubble when a user clicks "Find an Activity"', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )    

    const activityButton = getByRole('button', { name: /find an activity/i })
    fireEvent.click(activityButton)
    
    const activityPrompt = getByRole('heading', { name: /do something by yourself/i })

    expect(activityPrompt).toBeInTheDocument()
  })
  
  it('Should display the Journal when a user clicks "Look at My Journal"', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )    

    const journalButton = getByRole('button', { name: /look at my journal/i })
    fireEvent.click(journalButton)
    
    const activityLog = getByRole('heading', { name: /activities i\'ve tried/i })

    expect(activityLog).toBeInTheDocument()
  })

})