const numbers = [-1,-2,-3,-4,-5,-6,-7,-8,-9]

const aEntries = numbers.entries()

// console.log(aEntries.next().value) ////[0 , -1]  key value

for( const n of aEntries){
    console.log(n)
}