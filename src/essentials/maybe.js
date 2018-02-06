export const maybe1 = f => x => (x === undefined ? undefined : f(x))
export const maybe2 = f => (x, y) => (x === undefined || y === undefined ? undefined : f(x, y))
export const maybeN = f => (...xs) => {
  console.log(JSON.stringify(xs))
  const terms = xs.slice(0, xs.length - 1)
  const r = terms.reduce((ts, t) => ts === undefined || t === undefined ? undefined : ts, terms)
  return r === undefined ? undefined : f(...terms)
}