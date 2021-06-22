import { useMemo } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import categoriesReducer from '@store/categories/reducer'
import mockupsReducer from '@store/mockups/reducer'

import { initialState as categoriesInitialState } from './categories/reducer'
import { initialState as mockupsInitialState } from './mockups/reducer'

import type { Store } from 'redux'
import type { CategoriesState } from './categories/reducer'
import type { MockupsState } from './mockups/reducer'

export type State = {
  categories: CategoriesState,
  mockups: MockupsState,
}

const reducers = combineReducers({
  categories: categoriesReducer,
  mockups: mockupsReducer,
})
const initialState = {
  categories: categoriesInitialState,
  mockups: mockupsInitialState,
}

let store: Store | undefined

function initStore(preloadedState: State = initialState) {
  return createStore(
    reducers,
    preloadedState,
    composeWithDevTools(applyMiddleware()),
  )
}

export const initializeStore = (preloadedState: State) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState: State) {
  const store = useMemo(() => initializeStore(initialState), [ initialState ])

  return store
}