export const call = (func, args) =>
  input => Promise.resolve(input)
    .then(x => Promise.all(args.map(arg => arg(x))))
    .then(argValues => func(...argValues))

export const chain = (wrap, funcs) =>
  input => funcs.reduce((prev, func) => prev.then(func), Promise.resolve(input)).then(wrap)

export const when = (extract, [condition, yes, no = () => undefined]) =>
  input => Promise.resolve(input)
    .then(condition)
    .then(extract)
    .then(x => x ? yes(input) : no(input))