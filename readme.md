<p align="center">
  <img src="https://vitest.dev/logo-shadow.svg" height="128">
</p>

<h1 align="center">Vitest Learning Playground</h1>

> [!NOTE]
> This repository is for learning and experimenting with `vitest`

This is a demo project that showcases examples and serves as a guide to implement `vitest` with `typescript`.

## References

- [Vitest - `Documentation`](https://vitest.dev)
- [Rapid Testing with Vitest - `Course`](https://vueschool.io/courses/rapid-testing-with-vitest)
- [Vitest Basic Example - `Github codebase`](https://github.com/vitest-dev/vitest/tree/main/examples/basic)
- [Web.dev Learn Testing - `Course`](https://web.dev/learn/testing)

## Scripts

```sh
npm run test # Run all tests on watch mode
npm run test sum # Run a specific test
```

## Used Vitest API

### `test/sum.test.ts`
- [Getting Started](https://vitest.dev/guide/#getting-started)
- [`test()`](https://vitest.dev/api/#test)
- [`expect()`](https://vitest.dev/api/expect.html#expect)
- [`expect().toEqual()`](https://vitest.dev/api/expect.html#toequal)

### `tests/merge.test.ts`
- [`describe()`](https://vitest.dev/api/#describe)
- [`expect().toThrowError()`](https://vitest.dev/api/expect.html#tothrowerror)

### `tests/spying.test.ts`
- [Spying/Mocking functions](https://vitest.dev/guide/mocking.html#functions)
- [`vi.spyOn()`](https://vitest.dev/api/vi.html#vi-spyon)
- [`expect().toHaveBeenCalledTimes()`](https://vitest.dev/api/expect.html#tohavebeencalled)
- [`expect().toHaveBeenCalledWith`](https://vitest.dev/api/expect.html#tohavebeencalledwith)

### `tests/mock.test.ts`
- [Mocking](https://vitest.dev/guide/mocking.html)
- [Mocking - File System](https://vitest.dev/guide/mocking.html#file-system)
- [`vi.mock()`](https://vitest.dev/api/vi.html#vi-mock)
- [`vi.hoisted()](https://vitest.dev/api/vi.html#vi-hoisted)
- [`vi.resetModules()`](https://vitest.dev/api/vi.html#vi-resetmodules)

> [!WARNING]
> Vitest will not mock modules that were imported inside a `setup file` because they are cached by the time a test file is running. You can call `vi.resetModules()` inside `vi.hoisted` to clear all module caches before running a test file.
>
> https://vitest.dev/api/vi.html#vi-mock


### `tests/time.test.ts`
- [`vi.setSystemTime()`](https://vitest.dev/api/vi.html#vi-setsystemtime)
- [`expect().toBe()`](https://vitest.dev/api/expect.html#tobe)

### `tests/timer.test.ts`
- [Mocking Timers](https://vitest.dev/guide/mocking.html#timers)
- [`vi.useFakeTimers()`](https://vitest.dev/api/vi.html#vi-usefaketimers)
- [`vi.advanceTimersByTime()`](https://vitest.dev/api/vi.html#vi-advancetimersbytime)
- [`vi.advanceTimersToNextTimer()`](https://vitest.dev/api/vi.html#vi-advancetimerstonexttimer)

### `tests/network.test.ts`
- [Request](https://vitest.dev/guide/mocking.html#requests)
- [Setup Files](https://vitest.dev/config/#setupfiles)
- [`expect().toMatchInlineSnapshot()`](https://vitest.dev/api/expect.html#tomatchinlinesnapshot)
- [`vi.stubGlobal()`](https://vitest.dev/api/vi.html#vi-stubglobal)
- [MSW - Node.js integration](https://mswjs.io/docs/integrations/node)
- [MSW - Intercepting requests](https://mswjs.io/docs/basics/intercepting-requests)
- [MSW - `setupServer()`](https://mswjs.io/docs/api/setup-server/)
- [MSW - `http.get()`](https://mswjs.io/docs/api/http/#httpget)
- [MSW - `http.json()`](https://mswjs.io/docs/api/http-response#httpresponsejsonbody-init)
