function filterArray(numbers, value) {
const resultArray = [];

for (let x = 0; x <= numbers.length; x += 1) {
if (numbers[x] > value) {
   
    resultArray.push(numbers[x]);
}
}
return resultArray;
   
}






console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]



// my challenge ===============================

console.log(filterArray([100, 123, 156, 55, 74, 33, 22, 25, 89], 61));