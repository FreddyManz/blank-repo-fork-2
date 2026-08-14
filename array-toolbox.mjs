export function sum(numbers){
    let total = 0;
    for (const num of numbers){
        total += num;
    }
    return total;
}

export function average(numbers){
    if (numbers.length === 0){
        return 0;
    }
    return sum(numbers) / numbers.length;
}

//test case 1: works
console.log(average([2, 4, , 6]));
console.log(average([]));
