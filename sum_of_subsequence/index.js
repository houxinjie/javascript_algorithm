function sum(array) {

    if (!array.length) return 0;

    let sum = currentSum = 0;
    for (let i = 0, length = array.length; i < length; i++) {
        currentSum += array[i];
        if (currentSum > sum) {
            sum = currentSum;
        } else if (currentSum < 0){
            currentSum = 0;
        }

    }

    return sum;


}

var array1 = [-2, 11, -4, 13, -5, 2, -5, -3, 12, -9];
var array2 = [0, -3, 6, 8, -20, 21, 8, -9, 10, -1, 3, 6, 5];


console.log(sum(array1))
console.log(sum(array2))
