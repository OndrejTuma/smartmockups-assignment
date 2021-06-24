import cn from 'classnames'
import React from 'react'

import multiplier from '@utils/multiplier'

import Skeleton from '@components/layout/Skeleton'

const CategoriesSkeleton = () => {
  return (
    <ul
      className={'grid grid-flow-col grid-cols-categoriesMobile auto-cols-categoriesMobile grid-rows-3 auto-cols-max overflow-auto md:grid-cols-categories md:auto-cols-categories'}>
      {multiplier(index => (
        <li key={index} className={cn({
          'border-l border-light': index > 2,
        })}>
          <div className={cn('px-5 py-2 md:py-3 md:px-10')}>
            <Skeleton style={{ height: 22 }}/>
          </div>
        </li>
      ), 12)}
    </ul>
  )
}

export default CategoriesSkeleton