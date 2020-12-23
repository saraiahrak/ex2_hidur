// Dekel Yosef 315634071
// Sarai Ahrak 204894000


function memoize(f) {
    let results = {};

    return function () {
        let arg = arguments[0];
        return arg in results ? results[arg] : results[arg] = f(arg);
    };
}


let fibbonacci = (function () {
    function f(n) {
        if (n === 1 || n === 0) {
            return n;
        } else {
            return memFib(n - 1) + memFib(n - 2);
        }
    }

    const memFib = memoize(f);

    return f;
})();


// console.log(fibbonacci(60));
// console.log(fibbonacci(80));
