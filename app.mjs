import {sum, average, unique, chunk, intersection} from './array-toolbox.mjs';


const numbers = [1, 2, 3, 4, 5];

console.log('Sum:', sum(numbers));
console.log('Average:', average(numbers));
console.log('Unique:', unique(numbers));
console.log('Chunked:', chunk(numbers, 2));
console.log('Intersection:', intersection(numbers, [3, 4, 5, 6]));