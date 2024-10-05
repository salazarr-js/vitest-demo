import { test, expect, vi } from 'vitest'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
// import { loadConfig } from '@/index' // TODO: check why stop working when imported


vi.mock('node:fs', () => {
  return {
    existsSync: vi.fn(() => true),
    readFileSync: vi.fn(() => {
      console.log('Mock readFileSync called')
      return '{ "name": "mocked" }'
    }),
  }
})

/** Loads a configuration file from the current directory if it exists */
export function loadConfig() {
  const fileDir = resolve(__dirname, 'config.json')
  if (!existsSync(fileDir)) return undefined

  return JSON.parse(readFileSync(fileDir, 'utf-8'))
}

test.only('with fs', async () => {
  const result = loadConfig()

  expect(result).toEqual({ name: 'mocked' })
})
