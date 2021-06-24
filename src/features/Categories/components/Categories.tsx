import React, { MouseEventHandler } from 'react'
import cn from 'classnames'

export type FilterCategory = {
  title: string,
  slug: string,
  children: Array<FilterCategory>,
}
export type FlattenFilterCategory = {
  title: string,
  slug: string,
}
export type SetActiveCategoryFactory = (category: string) => MouseEventHandler<HTMLAnchorElement>

type Props = {
  activeCategory: string,
  categories: Array<FlattenFilterCategory>,
  setActiveCategoryFactory: SetActiveCategoryFactory,
}

const Categories = ({ activeCategory, categories, setActiveCategoryFactory }: Props) => {
  return (
    <ul
      className={'grid grid-flow-col grid-cols-categoriesMobile auto-cols-categoriesMobile grid-rows-3 auto-cols-max overflow-auto md:grid-cols-categories md:auto-cols-categories'}>
      {categories.map(({ title, slug }, index) => (
        <li key={slug} className={cn({
          'border-l border-light': index > 2,
        })}>
          <a href="#" className={cn('block px-5 py-2 md:py-3 md:px-10', {
            'font-bold': activeCategory === slug,
          })} onClick={setActiveCategoryFactory(slug)}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Categories