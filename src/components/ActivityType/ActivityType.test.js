import React from 'react'
import ActivityType from './ActivityType'
import { MemoryRouter } from 'react-router-dom'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('ActivityType', () => {
  it('should allow users to select all different types of activity when searching for a solo suggestion', () => {
    const mockSelectType = jest.fn()
    const { getByRole, getAllByRole, getByText } = render(
      <MemoryRouter>
        <ActivityType
          solo={true}
          withOthers={false}
          type={''}
          selectType={mockSelectType}
        />
      </MemoryRouter>
    )

    const label = getByText(/type of activity:/i)
    const dropdown = getByRole('combobox')
    const activityOptions = getAllByRole('option')

    expect(label).toBeInTheDocument()
    expect(dropdown).toBeInTheDocument()
    expect(activityOptions).toHaveLength(11)
  })

  it('should allow users to select fewer types of activity when searching for a suggestion for multiple people', () => {
    const mockSelectType = jest.fn()
    const { getByRole, getAllByRole, getByText } = render(
      <MemoryRouter>
        <ActivityType
          solo={false}
          withOthers={true}
          type={''}
          selectType={mockSelectType}
        />
      </MemoryRouter>
    )

    const label = getByText(/type of activity:/i)
    const dropdown = getByRole('combobox')
    const activityOptions = getAllByRole('option')

    expect(label).toBeInTheDocument()
    expect(dropdown).toBeInTheDocument()
    expect(activityOptions).toHaveLength(6)
  })

  it('should fire the selectType function when an activity type is selected', () => {
    const mockSelectType = jest.fn()
    const { getByRole } = render(
      <MemoryRouter>
        <ActivityType
          solo={true}
          withOthers={false}
          type={''}
          selectType={mockSelectType}
        />
      </MemoryRouter>
    )

    const selectActivity = getByRole('combobox')

    fireEvent.change(selectActivity, { target: { value: 'relaxation' } })

    expect(mockSelectType).toHaveBeenCalledTimes(1)
    expect(mockSelectType).toHaveBeenCalledWith('relaxation')
  })
})
