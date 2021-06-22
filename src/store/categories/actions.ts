import type { FlattenFilterCategory } from '@features/Categories/components/Categories'

export const SET_ACTIVE_CATEGORY = '@categories/SET_ACTIVE_CATEGORY'
export const SET_CATEGORY_LIST = '@categories/SET_CATEGORY_LIST'

export const setActiveCategory = (payload: string) => ({
  type: SET_ACTIVE_CATEGORY,
  payload,
})

export const setCategoryList = (payload: Array<FlattenFilterCategory>) => ({
  type: SET_CATEGORY_LIST,
  payload,
})