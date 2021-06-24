import filter from 'lodash/fp/filter'
import flow from 'lodash/fp/flow'
import get from 'lodash/fp/get'
import getOr from 'lodash/fp/getOr'
import uniqBy from 'lodash/fp/uniqBy'
import { createSelector } from 'reselect'

import showAllFilter from '@features/Categories/constants/showAllFilter'

import type { FlattenFilterCategory } from '@features/Categories/components/Categories'
import type { Mockup } from '@features/Mockups/components/Mockups'
import type { State } from '@store/index'

export const getActiveCategory: (state: State) => string = createSelector(get('categories'), getOr('', 'activeCategory'))
export const getFilteredCategoryList: (state: State) => Array<FlattenFilterCategory> = createSelector(
  get('categories.list'),
  get('mockups.list'),
  (categories: Array<FlattenFilterCategory>, mockups: Array<Mockup>) => {
    // filter out categories that are not in mockups and deduplicate
    const filteredCategoryList = flow(
      filter(({ slug }) => {
        for (const mockup of mockups) {
          if (Array.isArray(mockup.category) && mockup.category.includes(slug)) {
            return true
          }
        }
        return false
      }),
      uniqBy('title'),
    )(categories)

    // added Show all filter
    filteredCategoryList.unshift(showAllFilter)

    return filteredCategoryList
  }
)