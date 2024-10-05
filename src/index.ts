import { readFileSync, existsSync } from "node:fs"
import { resolve } from 'node:path'

/** Sum a list of numbers  */
export function sum(...numbers: number[]) {
  return numbers.reduce((a, b) => a + b, 0)
}

/** Deep (recursive) objects merging */
export function deepMerge(a: Record<string, any> | any[], b: Record<string, any> | any[]) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return [...a, ...b]
  }

  if (Array.isArray(a) || Array.isArray(b) || typeof a !== typeof b) {
    throw new Error("Can't merge two different types")
  }

  const merged = { ...a }
  for (const key of Object.keys(b)) {
    if (typeof a[key] === 'object' || Array.isArray(a[key]))
      merged[key] = deepMerge(a[key], b[key])
    else
      merged[key] = b[key]
  }

  return merged
}

/** Logs a greeting message to the console with the provided name */
export function greeting(name: string) {
  console.log(`Hello, ${name}`)
}

/** Loads a configuration file from the current directory if it exists */
export function loadConfig() {
  const fileDir = resolve(__dirname, 'config.json')
  if (!existsSync(fileDir)) return undefined

  return JSON.parse(readFileSync(fileDir, 'utf-8'))
}

/** Retrieves the current time in "HH:MM" format */
export function getCurrentTime() {
  return new Date().toTimeString().slice(0, 5)
}

/** Displays a warning message after a specified delay */
export function warnLater(msg: string, delay = 2000) {
  setTimeout(() => {
    console.log(msg)
  }, delay);
}

/** URL for fetching posts from the JSONPlaceholder API. */
export const POST_URL = 'https://jsonplaceholder.typicode.com/posts'

/** Fetches the body content of a post by its ID. */
export async function getPostBody(id: number) {
  const data = await fetch(`${POST_URL}/${id}`).then(r => r.json())

  return data.body
}
