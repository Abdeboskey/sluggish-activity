import React from 'react'
import App from './App'
import { fireEvent, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { getActivity } from '../../ApiCalls'
import '@testing-library/jest-dom'
jest.mock('../../ApiCalls.js')
jest.setTimeout(12000)

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

  it('should allow the user to go back home from the journal view', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )    

    const journalButton = getByRole('button', { name: /look at my journal/i })
    fireEvent.click(journalButton)
    
    const goHomeButton = getByRole('button', { name: /go home/i })
    expect(goHomeButton).toBeInTheDocument()
    fireEvent.click(goHomeButton)

    const homeHeading = getByRole('heading', { name: /what can i do for you today/i })
    expect(homeHeading).toBeInTheDocument()
  })

  it('should allow a user to go back home after an activity has been selected', async () => {
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
        <App />
      </MemoryRouter>
    )
    
    const activityButton = getByRole('button', { name: /find an activity/i })
    fireEvent.click(activityButton)
    
    const activityPrompt = getByRole('heading', { name: /do something by yourself/i })
    expect(activityPrompt).toBeInTheDocument()
    
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

    const goHomeButton = await findByRole('button', { name: /can i go home/i})
    fireEvent.click(goHomeButton)

    const homeHeading = getByRole('heading', { name: /what can i do for you today/i })
    expect(homeHeading).toBeInTheDocument()
  })

  it('should add an activity to the journal, and allow the user to navigate to the journal when an activity is saved.', async () => {
    getActivity.mockResolvedValueOnce({
      activity: "Learn about Beans",
      type: "education",
      participants: 1,
      price: 0.0,
      link: "https://en.wikipedia.org/wiki/Bean",
      key: "324324",
      accessibility: 0.0,
    })

    const { getByRole, getAllByRole, findByRole, findByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    
    const activityButton = getByRole('button', { name: /find an activity/i })
    fireEvent.click(activityButton)
    
    const activityPrompt = getByRole('heading', { name: /do something by yourself/i })
    expect(activityPrompt).toBeInTheDocument()
    
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

    const saveButton = await findByRole('button', { name: /thanks! i\'ll try that/i })
    fireEvent.click(saveButton)

    const viewJournalButton = await findByRole('button', { name: /view my journal/i})
    fireEvent.click(viewJournalButton)

    const journalHeading = await findByRole('heading', { name: /activities i\'ve tried/i })
    expect(journalHeading).toBeInTheDocument()

    const savedActivity = await findByText(/learn about beans/i)
    expect(savedActivity).toBeInTheDocument()
  })
})