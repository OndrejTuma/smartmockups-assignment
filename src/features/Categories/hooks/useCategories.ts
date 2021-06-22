import axios from 'axios'
import { useQuery } from 'react-query'
import type { UseQueryResult } from 'react-query'

import { categoriesEndpoint } from '@constants/apiEndpoints'
import queryId from '../constants/queryId'

async function fetchMockups() {
  const { data } = await axios.get(categoriesEndpoint)

  return data
}

function useCategories(options?: Object): UseQueryResult {
  return useQuery(queryId, fetchMockups, options)
}

export default useCategories