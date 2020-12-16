results = [1];


function f(n) {
    if (results.length > n) {
        return results[n]
    } else {
        results[n] = n * f(n - 1);
        return results[n]
    }
}

// console.log(f(10));
// console.log(f(5));