const iterator = [1,2,3,4,5,6,7,8,9][Symbol.iterator]()

// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)

console.log(iterator)

for(const n of iterator){
    console.log(n)
}