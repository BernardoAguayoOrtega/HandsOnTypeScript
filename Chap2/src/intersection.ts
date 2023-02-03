// intersection union types
let obj: { a: number } & { b: string } = { a: 1, b: "2" }

console.log(obj)

// union
let union: null | undefined | number = null
console.log(union)
union = undefined
console.log(union)
union = 1
console.log(union)