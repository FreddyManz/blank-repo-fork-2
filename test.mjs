import { sum, average, unique, chunk, intersection} from './array-toolbox.mjs';


console.log(sum([1, 2, 3, 4]));   // 10
console.log(average([2, 4, 6]));  // 4
console.log(average([]));          // 0


console.log(unique([1, 2, 2, 3, 1])); // expect [1, 2, 3]

console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(intersection([1, 2, 2, 3], [2, 3, 4]));