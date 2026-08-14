
//for sum
export function sum(numbers){
    let total = 0;
    for (const num of numbers){
        total += num;
    }
    return total;
}

//for average 
export function average(numbers){
    if (numbers.length === 0){
        return 0;
    }
    return sum(numbers) / numbers.length;
}

//unique array
export function unique(array){
    return [...new Set(array)];
}


//chunky boi
//Inspiration For My Answer: https://stackoverflow.com/questions/27857011/how-to-split-an-array-into-smaller-chunk-arrays

export function chunk(array, size){
    const result = [];
    //up to 5
    for (let i = 0; i < array.length; i += size){
        result.push(array.slice(i,i + size));
    }
    return result;
}

//intersection helper
//Inspiration: https://stackoverflow.com/questions/1885557/simplest-code-for-array-intersection-in-javascript
export function intersection (firstArray, secondArray){
    const secondSet = new Set(secondArray);
    //is this value in the set?
    const result = firstArray.filter(value => secondSet.has(value));
    return unique(result);
}