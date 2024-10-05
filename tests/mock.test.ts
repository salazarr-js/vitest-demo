import { test, expect, vi } from 'vitest'
import { loadConfig } from '@/index'

// Since `@/index` module is imported at `msw.setup.ts` we have to clear all module caches first
// https://vitest.dev/api/vi.html#vi-mock
vi.hoisted(() => {
  vi.resetModules()
})

vi.mock('node:fs', () => {
  console.warn('mocking `node:fs`')
  return {
    existsSync: vi.fn(() => true),
    readFileSync: vi.fn(() => '{ "name": "mocked" }'),
  }
})

test.only('with fs', async () => {
  const result = loadConfig()

  expect(result).toEqual({ name: 'mocked' })
})
