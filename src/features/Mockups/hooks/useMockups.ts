import axios from 'axios'
import { useQuery, UseQueryResult } from 'react-query'

import { mockupsEndpoint } from '@constants/apiEndpoints'
import queryId from '../constants/queryId'

import type { Mockup } from '../components/Mockups'

async function fetchMockups() {
  const { data } = await axios.get(mockupsEndpoint)

  return data
}

function useMockups(options?: Object): UseQueryResult<Array<Mockup>> {
  return useQuery(queryId, fetchMockups, options)
}

export default useMockups