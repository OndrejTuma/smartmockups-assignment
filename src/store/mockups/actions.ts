import type { Mockup } from '@features/Mockups/components/Mockups'

export const SET_MOCKUP_LIST = '@mockups/SET_MOCKUP_LIST'

export const setMockupList = (payload: Array<Mockup>) => ({
  type: SET_MOCKUP_LIST,
  payload,
})