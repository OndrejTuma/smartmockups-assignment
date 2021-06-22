import get from 'lodash/fp/get'
import { createSelector } from 'reselect'

import type { State } from '@store/index'
import type { Mockup } from '@features/Mockups/components/Mockups'

export const getFilteredMockupList: (state: State) => Array<Mockup> = createSelector(
  get('mockups.list'),
  get('categories.activeCategory'),
  (mockups: Array<Mockup>, activeCategory: string) =>
    mockups.filter(({ category }) => !activeCategory || category.includes(activeCategory)),
)