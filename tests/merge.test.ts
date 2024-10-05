import { describe, test, expect } from 'vitest'
import { deepMerge } from '@/index'

describe('deep merge', () => {
  test('shallow merge', () => {
    const merged = deepMerge(
      { name: 'Jose Salazar' },
      { github: 'salazarr-js' }
    )

    expect(merged).toEqual({
      name: 'Jose Salazar',
      github: 'salazarr-js'
    })
  })

  test('shallow merge with overlaps', () => {
    const merged = deepMerge(
      {
        name: 'Jose Salazar',
        github: 'unknown'
      },
      {
        github: 'salazarr-js',
        twitter: 'salazarr_js'
      }
    )

    expect(merged).toEqual({
      name: 'Jose Salazar',
      github: 'salazarr-js',
      twitter: 'salazarr_js'
    })
  })

  test('shallow merge with arrays', () => {
    const merged = deepMerge(
      ['vue', 'react'],
      ['svelte', 'solid']
    )

    expect(merged).toEqual([
      'vue', 'react', 'svelte', 'solid'
    ])
  })

  test('deep merge with overlaps', () => {
    const merged = deepMerge(
      {
        name: 'Jose Salazar',
        accounts: {
          github: 'salazarr-js'
        }
      },
      {
        accounts: {
          twitter: 'salazarr_js'
        }
      }
    )

    expect(merged).toEqual({
      name: 'Jose Salazar',
      accounts: {
        github: 'salazarr-js',
        twitter: 'salazarr_js'
      }
    })
  })

  test('throws error on merging two different types', () => {
    expect(() => deepMerge(
      ['foo', 'bar'],
      { foo: 'bar'}
    )).toThrowError("Can't merge two different types")
  })
})

