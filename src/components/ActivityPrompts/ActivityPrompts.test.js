import React from 'react'
import ActivityPrompts from './ActivityPrompts'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('ActivityPrompts', () => {
  it('should ask how many participants a user would like if nothing has been selected', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <ActivityPrompts
          solo={false}
          withOthers={false}
        />
      </MemoryRouter>
    )

    const participantsPrompt = getByRole('heading', { name: /by yourself/i })

    expect(participantsPrompt).toBeInTheDocument()
  })

  it('should ask what kind of activity a user is interested in if they have selected \'By Myself\'', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <ActivityPrompts
          solo={true}
          withOthers={false}
        />
      </MemoryRouter>
    )

    const activityType = getByRole('heading', { name: /kind of activity/i })

    expect(activityType).toBeInTheDocument()
  })

  it('should ask what kind of activity a user is interested in if they have selected \'With Others\'', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <ActivityPrompts
          solo={false}
          withOthers={true}
        />
      </MemoryRouter>
    )

    const activityType = getByRole('heading', { name: /kind of activity/i })

    expect(activityType).toBeInTheDocument()
  })
})