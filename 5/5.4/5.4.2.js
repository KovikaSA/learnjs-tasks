let style = ["Джаз", "Блюз"];

console.log(style);

style.push("Рок-н-ролл");

console.log(style);

style[(style.length - 1) / 2] = "Классика";

console.log(style);

console.log(style.shift());

style.unshift("Рэп", "Регги");

console.log(style);
