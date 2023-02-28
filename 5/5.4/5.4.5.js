function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }

    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 4, 3, 9]));
console.log(getMaxSubSum([-1, 2, 36, -9]));
console.log(getMaxSubSum([-1, 20, 3, -9]));
console.log(getMaxSubSum([100, 9, -3, -9]));