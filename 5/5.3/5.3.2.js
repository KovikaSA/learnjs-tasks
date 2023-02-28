function checkSpam(str) {
    let newStr = str.toLowerCase();

    return newStr.includes('viagra') || newStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRa now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));