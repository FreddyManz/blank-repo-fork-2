import { capitalise } from './string-toolbox.mjs';
import { truncate } from './string-toolbox.mjs';
import { isPalindrome } from './string-toolbox.mjs';
import { reverse } from './string-toolbox.mjs';
import { camelCase } from './string-toolbox.mjs';

const testString = "racecar"
const maxLength = 8;

const printTest = (string, length) => {
    console.log(capitalise(string))
    console.log(truncate(string, length));
    console.log(camelCase(string));
    console.log(reverse(string));
    console.log(isPalindrome(string));
}
import {sum, average, unique, chunk, intersection} from './array-toolbox.mjs';


const numbers = [1, 2, 3, 4, 5];

console.log('Sum:', sum(numbers));
console.log('Average:', average(numbers));
console.log('Unique:', unique(numbers));
console.log('Chunked:', chunk(numbers, 2));
console.log('Intersection:', intersection(numbers, [3, 4, 5, 6]));
