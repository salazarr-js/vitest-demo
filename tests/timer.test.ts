import { test, expect, vi, beforeEach } from 'vitest'
import { warnLater } from '@/index'

beforeEach(() => {
  vi.useFakeTimers()
})

test('warnLater', async () => {
const logSpy = vi.spyOn(console, 'log')

  warnLater('2 seconds passed')

  expect(logSpy).to.not.toBeCalled()

  // vi.advanceTimersByTime(2000)
  vi.advanceTimersToNextTimer()

  expect(logSpy).toBeCalledWith('2 seconds passed')
})
