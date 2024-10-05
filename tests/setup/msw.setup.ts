import { beforeAll, afterAll } from 'vitest'
import { setupServer } from 'msw/node'
import { http, HttpResponse  } from 'msw'
import { POST_URL } from '@/index'

const server = setupServer(
  http.get(`${POST_URL}/:id`, ({ params }) => {
    const id = params.id
    return HttpResponse.json({ body: `Mocked for ${id}!` })
  })
)

beforeAll(() => server.listen())
afterAll(() => server.close())
