import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setMockupList } from '@store/mockups/actions'
import { getFilteredMockupList } from '@store/mockups/selectors'
import useMockups from '../hooks/useMockups'

import Wrapper from '@components/layout/Wrapper'
import DataPresenter from '@components/core/DataPresenter'
import Mockups, { Mockup } from '../components/Mockups'

const MockupsContainer = () => {
  const dispatch = useDispatch()
  const query = useMockups({
    onSuccess: (data: Array<Mockup>) => dispatch(setMockupList(data))
  })
  const mockups = useSelector(getFilteredMockupList)

  return (
    <Wrapper>
      <DataPresenter query={query}>
        <Mockups mockups={mockups}/>
      </DataPresenter>
    </Wrapper>
  )
}

export default MockupsContainer