/**
 * @param {Array} arr 
 * @param {Number} expected 
 */
export default function countTrue(arr, expected) {
  if (!Array.isArray(arr)) throw new Error('first argument must be an Array!')
  const len = arr.filter(Boolean).length

  return typeof expected === 'number' ? len === expected : len
}
