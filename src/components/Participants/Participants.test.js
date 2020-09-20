import React from 'react'
import Participants from './Participants'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

describe('Participants', () => {
  it('should display options for \'By Myself\' and \'With Others\'', () => {
    const mockSelectParticipants = jest.fn()
    const { getAllByRole, getByText } = render(
      <MemoryRouter>
        <Participants 
          solo={false}
          withOthers={false}
          selectParticipants={mockSelectParticipants}
        />
      </MemoryRouter>
    )
    
    const byMyself = getByText(/by myself/i)
    const withCompany = getByText(/with company/i)
    expect(byMyself).toBeInTheDocument()
    expect(withCompany).toBeInTheDocument()
    
    const options = getAllByRole('checkbox')
    expect(options).toHaveLength(2)
  })

  it('should fire \'selectParticipants\' when the solo option is checked', () => {
    const mockSelectParticipants = jest.fn()
    const { getAllByRole } = render(
      <MemoryRouter>
        <Participants
          solo={false}
          withOthers={false}
          selectParticipants={mockSelectParticipants}
        />
      </MemoryRouter>
    );
    
    const options = getAllByRole('checkbox')
    fireEvent.click(options[0])

    expect(mockSelectParticipants).toHaveBeenCalledTimes(1)
    expect(mockSelectParticipants).toHaveBeenCalledWith('solo')
  })

  it('should fire \'selectParticipants\' when the withOthers option is checked', () => {
    const mockSelectParticipants = jest.fn()
    const { getAllByRole } = render(
      <MemoryRouter>
        <Participants
          solo={false}
          withOthers={false}
          selectParticipants={mockSelectParticipants}
        />
      </MemoryRouter>
    );
    
    const options = getAllByRole('checkbox')
    fireEvent.click(options[1])

    expect(mockSelectParticipants).toHaveBeenCalledTimes(1)
    expect(mockSelectParticipants).toHaveBeenCalledWith('withOthers')
  })
})
