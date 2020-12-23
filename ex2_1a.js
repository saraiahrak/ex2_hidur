// Dekel Yosef 315634071
// Sarai Ahrak 204894000



let results = {'0': 1, '1': 1};

function f(n) {
    if (n in results) {
        return results[n]
    } else {
        results[n] = n * f(n - 1);
        return results[n]
    }
}

// console.log(f(10));
// console.log(f(5));