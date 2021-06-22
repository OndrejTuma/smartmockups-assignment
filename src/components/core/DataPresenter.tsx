import React from 'react'

import Loader from '@components/core/Loader'

import type { ReactNode } from 'react'
import type { UseQueryResult } from 'react-query'

type Props = {
  children: ReactNode | ((data: any) => ReactNode),
  error?: (error: any) => ReactNode,
  loader?: ReactNode,
  query: UseQueryResult,
  transformData?: (data: any) => any
}

const ApolloDataPresenter = (
  {
    children,
    error = message => (
      <div className={'h3 text-danger'}>Chyba: {message}</div>
    ),
    loader = (
      <Loader/>
    ),
    query,
    transformData = data => data,
  }: Props,
) => {
  if (query.isLoading) {
    return loader
  }
  if (query.isError) {
    return typeof error === 'function' ? error(query.error) : error
  }

  const transformedData = transformData(query.data)

  if (typeof children === 'function') {
    return children(transformedData)
  }

  return children
}

export default ApolloDataPresenter