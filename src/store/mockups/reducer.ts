import type { AnyAction } from 'redux'

import { Mockup } from '@features/Mockups/components/Mockups'

import { SET_MOCKUP_LIST } from './actions'

export type MockupsState = {
  list: Array<Mockup>,
}

export const initialState: MockupsState = {
  list: [],
}

const reducer = (state: MockupsState = initialState, action: AnyAction) => {
  const { payload, type } = action

  switch (type) {
    case SET_MOCKUP_LIST:
      return {
        ...state,
        list: payload,
      }
    default:
      return state
  }
}

export default reducer