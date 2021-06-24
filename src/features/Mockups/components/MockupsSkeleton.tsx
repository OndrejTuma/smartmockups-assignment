import React from 'react'

import multiplier from '@utils/multiplier'

const MockupsSkeleton = () => {
  return (
    <div className={'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-none'}>
      {multiplier(index => (
        <div key={index} className={'bg-gray'} style={{paddingTop: '75%'}}/>
      ), 8)}
    </div>
  )
}

export default MockupsSkeleton