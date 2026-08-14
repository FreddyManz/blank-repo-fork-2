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