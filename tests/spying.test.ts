import { test, expect, vi } from 'vitest'
import { greeting } from '@/index'

test('greeting', () => {
  const spy = vi.spyOn(console, 'log')

  greeting('World')
  greeting('Jose')

  expect(spy).toHaveBeenCalledTimes(2)
  expect(spy).toHaveBeenCalledWith('Hello, World')
  expect(spy).toHaveBeenCalledWith('Hello, Jose')
})
