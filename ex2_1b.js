results = [0, 1, 1];

function f(n) {
    if (results.length > n) {
        return results[n];
    } else {
        results[n] = f(n - 1) + f(n - 2);
        return results[n];
    }
}


// console.log(f(18));
// console.log(f(10));