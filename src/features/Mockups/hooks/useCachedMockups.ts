import { useQueryClient } from 'react-query'
import type { QueryState } from 'react-query/types/core/query'

import queryId from '../constants/queryId'

function useCachedMockups(): QueryState | undefined {
  const queryClient = useQueryClient()

  return queryClient.getQueryState(queryId)
}

export default useCachedMockups