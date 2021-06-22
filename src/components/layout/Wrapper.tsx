import React from 'react'
import cn from 'classnames'

import type { ReactNode } from 'react'

type Props = {
  children: ReactNode,
  className?: string,
}

const Wrapper = ({ className, children }: Props) => {
  return (
    <div className={cn(className, 'max-w-screen-xl mx-auto')}>
      {children}
    </div>
  )
}

export default Wrapper