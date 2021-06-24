import React, { useCallback } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import { setActiveCategory as setActiveCategoryAction, setCategoryList } from '@store/categories/actions'
import { getActiveCategory, getFilteredCategoryList } from '@store/categories/selectors'
import useCategories from '../hooks/useCategories'
import flattenCategories from '../utils/flattenCategories'

import Wrapper from '@components/layout/Wrapper'
import DataPresenter from '@components/core/DataPresenter'
import Categories, { FilterCategory, SetActiveCategoryFactory } from '../components/Categories'
import CategoriesSkeleton from '../components/CategoriesSkeleton'

const CategoriesContainer = () => {
  const dispatch = useDispatch()
  const query = useCategories({
    onSuccess: (data: Array<FilterCategory>) => dispatch(setCategoryList(flattenCategories(data)))
  })
  const router = useRouter()
  const activeCategory = useSelector(getActiveCategory)
  const categories = useSelector(getFilteredCategoryList)

  const setActiveCategoryFactory: SetActiveCategoryFactory = useCallback(category => e => {
    e.preventDefault()
    dispatch(setActiveCategoryAction(category))
    router.replace({
        pathname: router.pathname,
        query: {
          ...router.query,
          filter: category,
        },
      }, undefined,
      {
        shallow: true,
      })
  }, [])

  return (
    <Wrapper className={'border border-light box-content rounded py-6 mt-14 mb-7'}>
      <DataPresenter query={query} loader={<CategoriesSkeleton/>}>
        <Categories
          activeCategory={activeCategory}
          categories={categories}
          setActiveCategoryFactory={setActiveCategoryFactory}
        />
      </DataPresenter>
    </Wrapper>
  )
}

export default CategoriesContainer