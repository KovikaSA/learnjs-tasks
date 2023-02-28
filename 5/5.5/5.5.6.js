function Calculator() {

    this.method = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
        "**": (a, b) => a ** b
    };

    this.calculate = function (str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!this.method[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.method[op](a, b);
    }

    this.addMethod = function (name, func) {
        this.method[name] = func;
    }
}

let powerCalc = new Calculator;

console.log(powerCalc.calculate("2 - 3"));
console.log(powerCalc.calculate("2 + 3"));
console.log(powerCalc.calculate("2 * 3"));
console.log(powerCalc.calculate("2 / 3"));
console.log(powerCalc.calculate("2 ** 3"));