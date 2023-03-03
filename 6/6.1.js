"use strict";

// 1. С использованием цикла.
console.time('sumTo');
function sumTo(n) {

    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.timeEnd('sumTo');

console.log(sumTo(100));

// 2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
console.time('sumToRecursion');
function sumToRecursion(n) {
    if (n == 1) return 1;
    return n + sumToRecursion(n - 1);
}
console.timeEnd('sumToRecursion');

console.log(sumToRecursion(100));

// 3. С использованием формулы арифметической прогрессии.
console.time('arithmeticProgression')
function arithmeticProgression(n) {

    return n * (n + 1) / 2;

}
console.timeEnd('arithmeticProgression');

console.log(arithmeticProgression(100));

/* Бенчмарк*/
// let arr = [];
// for (let i = 0; i < 1000; i++) arr[i] = 0;

// function bench(f) {
//     let date = new Date();
//     for (let i = 0; i < 1000; i++) f(arr);
//     return new Date() - date;
// }

// let timeSumTo = 0,
//     //timeSumToRecursion = 0,
//     timeArithmeticProgression = 0;
// for (let i = 0; i < 100; i++) {
//     timeSumTo += bench(sumTo);
//     //timeSumToRecursion += bench(sumToRecursion);
//     timeArithmeticProgression += bench(arithmeticProgression);
// }

// console.log("Время sumTo: " + /*timeSumTo*/ + bench(sumTo) + " мс"); //28 мс в одиночном запуске, 2628 мс в много разовом
// console.log("Время sumToRecursion: " + /*timeSumToRecursion*/ bench(sumToRecursion) + " мс");
// console.log("Время arithmeticProgression: " + /*timeArithmeticProgression*/ + bench(arithmeticProgression) + " мс");// 53 мс в одиночном, 5300 мс
