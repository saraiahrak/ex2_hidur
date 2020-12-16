function memoize(f) {
    let results = {};

    return function () {
        let arg = arguments[0];
        if (arg in results) {
            console.log('I exist!!');
            return results[arg];
        } else {
            console.log('I should calculate');
            results[arg] = f(arg);
            return results[arg];
        }
    };
}