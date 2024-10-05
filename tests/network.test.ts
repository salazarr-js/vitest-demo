import { test, expect } from 'vitest'
import { getPostBody } from '@/index'

// vi.stubGlobal('fetch', async () => {
//   return {
//     json() {
//       return {
//         body: 'foo'
//       }
//     }
//   }
// })

test('should fetch', async () => {
  const result = await getPostBody(1)

  expect(result).toMatchInlineSnapshot('"Mocked for 1!"')
})
