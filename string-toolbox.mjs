const capitalise = (string) => {
    string = string.split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
    return string;
}

const truncate = (string, length) => {
    string = string.slice(0, length);
    return string;
}

const camelCase = (string) => {
    string = string.toLowerCase().split(" ");
    string = string[0] + string.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");
    return string;
}

const reverse = (string) => {
    return string.split("").reverse().join("");
}

const isPalindrome = (string) => {
    const reversed = reverse(string);
    return string === reversed;
}

const printTest = (string, length) => {
    console.log(capitalise(string))
    console.log(truncate(string, length));
    console.log(camelCase(string));
    console.log(reverse(string));
    console.log(isPalindrome(string));
}

const testString = "the quick brown fox"
const maxLength = 8;
printTest(testString, maxLength);