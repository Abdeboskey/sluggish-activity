import React from 'react'
import ActivityButtons from './ActivityButtons'
import { fireEvent, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

describe('ActivityButtons', () => {
  it('should give a user options to try an activity, get a new one, and start over', () => {
    const suggestActivity = jest.fn()
    const startOver = jest.fn()
    const { getByRole } = render(
      <MemoryRouter>
        <ActivityButtons
          activity={"Learn to Yo-Yo"}
          suggestActivity={suggestActivity}
          startOver={startOver}
        />
      </MemoryRouter>
    )

    const saveButton = getByRole('button', { name: /thanks! i'll try that/i})
    const refreshButton = getByRole('button', { name: /something else?/i})
    const startOverButton = getByRole('button', { name: /start over?/i})

    expect(saveButton).toBeInTheDocument()
    expect(refreshButton).toBeInTheDocument()
    expect(startOverButton).toBeInTheDocument()
  })

  it('should fire suggestActivity when the \'Suggest Something Else\' button is clicked',  () => {
    const mockSuggestActivity = jest.fn()
    const startOver = jest.fn()
    const { getByRole } = render(
      <MemoryRouter>
        <ActivityButtons
          activity={"Learn to Yo-Yo"}
          suggestActivity={mockSuggestActivity}
          startOver={startOver}
        />
      </MemoryRouter>
    )

    const refreshButton = getByRole('button', { name: /something else/i})
    fireEvent.click(refreshButton)

    expect(mockSuggestActivity).toHaveBeenCalledTimes(1)
  })

  it('should fire startOver when the \'Start Over\' button is clicked',  () => {
    const mockSuggestActivity = jest.fn()
    const startOver = jest.fn()
    const { getByRole } = render(
      <MemoryRouter>
        <ActivityButtons
          activity={"Learn to Yo-Yo"}
          suggestActivity={mockSuggestActivity}
          startOver={startOver}
        />
      </MemoryRouter>
    )

    const startOverButton = getByRole("button", { name: /start over?/i });
    fireEvent.click(startOverButton)

    expect(startOver).toHaveBeenCalledTimes(1)
  })

  // Will need test for 'Thanks I'll try that' button when function to save to localStorage is built
})