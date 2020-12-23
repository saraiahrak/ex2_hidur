// Dekel Yosef 315634071
// Sarai Ahrak 204894000


function memoize(f) {
    let results = {};

    return function () {
        let arg = arguments[0];
        return arg in results ? results[arg] : results[arg] = f(arg);
    };
}


// function tester(n) {
//     return n + 1;
// }
//
// let memFunc = memoize(tester);
// console.log(memFunc(5));
// console.log(memFunc(4));
// console.log(memFunc(4));
