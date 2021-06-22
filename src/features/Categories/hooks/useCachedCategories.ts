import { useQueryClient } from 'react-query'

import queryId from '../constants/queryId'

const useCachedCategories = () => {
  const queryClient = useQueryClient()

  return queryClient.getQueryState(queryId)
}

export default useCachedCategories