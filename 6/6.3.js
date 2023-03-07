function fibon(n) {
    return n <= 1 ? n : fibon(n - 1) + fibon(n - 2);
}

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fibon(7))