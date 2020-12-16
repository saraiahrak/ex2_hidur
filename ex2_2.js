function memoize(f) {
    let results = {};

    return function () {
        let arg = arguments[0];
        if (arg in results) {
            return results[arg];
        } else {
            results[arg] = f(arg);
            return results[arg];
        }
    };
}


// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
//
//
// let test = memoize(factorial);
// console.log(test(5));
// console.log(test(5));
// console.log(test(4));
