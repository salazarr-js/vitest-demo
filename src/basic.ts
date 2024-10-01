
/** Sum a list of numbers  */
export function sum(...numbers: number[]) {
  return numbers.reduce((a, b) => a + b, 0)
}