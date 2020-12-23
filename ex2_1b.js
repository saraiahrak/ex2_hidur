let results = {'0': 0, '1': 1};

function f(n) {
    if (n in results) {
        return results[n];
    } else {
        results[n] = f(n - 1) + f(n - 2);
        return results[n];
    }

}

//
// console.log(f(60));
// console.log(f(10));