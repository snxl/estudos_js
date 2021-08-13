const numbers = [-1,-2,-3,-4,-5,-6,-7,-8,-9]

const numbers2 = Array.from(numbers, x => (x % 2 === 0))

console.log(numbers2)

const start = 5
const stop = 10
const length = (stop - start)

const arrayFrom = Array.from({length}, ( char = start + 1 , index ) => char + index)

console.log(arrayFrom)

