import React, {ReactChildren} from 'react'
import cn from 'classnames'

type Props = {
  children?: ReactChildren,
  className?: string,
  style?: object,
}

const Skeleton = ({ children, className, style }: Props) => {
  return (
    <div className={cn(className, 'bg-light animate-pulse rounded')} style={style}>
      {children}
    </div>
  )
}

export default Skeleton