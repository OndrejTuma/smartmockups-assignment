import { FlattenFilterCategory } from '@features/Categories/components/Categories'
import type { AnyAction } from 'redux'

import { SET_ACTIVE_CATEGORY, SET_CATEGORY_LIST } from './actions'

export type CategoriesState = {
  activeCategory: string,
  list: Array<FlattenFilterCategory>,
}

export const initialState: CategoriesState = {
  activeCategory: '',
  list: [],
}

const reducer = (state: CategoriesState = initialState, action: AnyAction) => {
  const { payload, type } = action

  switch (type) {
    case SET_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: payload,
      }
    case SET_CATEGORY_LIST:
      return {
        ...state,
        list: payload,
      }
    default:
      return state
  }
}

export default reducer