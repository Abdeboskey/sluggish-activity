import React from 'react'
import TextBubble from './TextBubble'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { getActivity } from '../../ApiCalls'
jest.mock('../../ApiCalls')

describe('TextBubble', () => {
  it('should suggest an activity based on the user\'s selected parameters', async () => {
    getActivity.mockResolvedValueOnce({
      activity: "Learn about Beans",
      type: "education",
      participants: 1,
      price: 0.0,
      link: "https://en.wikipedia.org/wiki/Bean",
      key: "324324",
      accessibility: 0.0,
    })
    const { getByRole, getAllByRole, findByRole } = render(
      <MemoryRouter>
        <TextBubble />
      </MemoryRouter>
    )
    
    const findAnActivityHeading = getByRole('heading', { name: /let\'s find an activity/i })
    expect(findAnActivityHeading).toBeInTheDocument()
    const participantsPrompt = getByRole('heading', { name: /do something by yourself/i })
    expect(participantsPrompt).toBeInTheDocument()

    const participantsCheckbox = getAllByRole('checkbox')
    fireEvent.click(participantsCheckbox[0])

    const typeOfActivityPrompt = getByRole('heading', { name: /what kind of activity/i })
    expect(typeOfActivityPrompt).toBeInTheDocument()
    
    const selectActivity = getByRole('combobox')
    fireEvent.change(selectActivity, { target: { value: 'education' } })

    const suggestActivityButton = getByRole('button', { name: /suggest activity/i })
    fireEvent.click(suggestActivityButton)

    const suggestedActivity = await findByRole('heading', { name: /what if you learn about beans/i })
    expect(suggestedActivity).toBeInTheDocument()

    const activityLink = await findByRole('heading', { name: /check it out here/i })
    expect(activityLink).toBeInTheDocument()
  })

  it('should allow a user to start over if they want to select different parameters', async () => {
    getActivity.mockResolvedValueOnce({
      activity: "Learn about Beans",
      type: "education",
      participants: 1,
      price: 0.0,
      link: "https://en.wikipedia.org/wiki/Bean",
      key: "324324",
      accessibility: 0.0,
    })
    const { getByRole, getAllByRole, findByRole } = render(
      <MemoryRouter>
        <TextBubble />
      </MemoryRouter>
    )
    
    const findAnActivityHeading = getByRole('heading', { name: /let\'s find an activity/i })
    expect(findAnActivityHeading).toBeInTheDocument()
    const participantsPrompt = getByRole('heading', { name: /do something by yourself/i })
    expect(participantsPrompt).toBeInTheDocument()
    
    const participantsCheckbox = getAllByRole('checkbox')
    fireEvent.click(participantsCheckbox[0])
    
    const typeOfActivityPrompt = getByRole('heading', { name: /what kind of activity/i })
    expect(typeOfActivityPrompt).toBeInTheDocument()
    
    const selectActivity = getByRole('combobox')
    fireEvent.change(selectActivity, { target: { value: 'education' } })
    
    const suggestActivityButton = getByRole('button', { name: /suggest activity/i })
    fireEvent.click(suggestActivityButton)
    
    const suggestedActivity = await findByRole('heading', { name: /what if you learn about beans/i })
    expect(suggestedActivity).toBeInTheDocument()
    
    const activityLink = await findByRole('heading', { name: /check it out here/i })
    expect(activityLink).toBeInTheDocument()
    
    const startOverButton = await findByRole('button', { name: /can i start over\?/i })
    fireEvent.click(startOverButton)
    
    const anotherParticipantsPrompt = await findByRole('heading', { name: /do something by yourself/i })
    expect(anotherParticipantsPrompt).toBeInTheDocument()
  })
})