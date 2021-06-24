import type { ReactElement } from 'react'

const multiplier = (content: (index: number) => ReactElement, count: number = 1) => {
  const result = []

  for (let i = 0; i < count; i++) {
    result.push(content(i))
  }

  return result
}

export default multiplier
