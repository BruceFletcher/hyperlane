import { maybe1, maybe2, maybeN } from './maybe'

export const not = maybe1(x => !x)
export const and = maybeN((...xs) => xs.reduce((xs, x) => xs && x), true)
export const or  = maybeN((...xs) => xs.reduce((xs, x) => xs || x), false)
export const xor = maybe2((x, y) => (x || y) && !(x && y))
