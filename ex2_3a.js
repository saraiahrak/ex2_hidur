// Dekel Yosef 315634071
// Sarai Ahrak 204894000


function memoize(f) {
    let results = {};

    return function () {
        let arg = arguments[0];
        return arg in results ? results[arg] : results[arg] = f(arg);
    };
}


let factorial = (function () {
    function f(n) {
        if (n === 1 || n === 0) {
            return 1;
        } else {
            return n * memFact(n - 1);
        }
    }

    const memFact = memoize(f);

    return f;
})();


//
// console.log(factorial(8));
// console.log(factorial(10));

