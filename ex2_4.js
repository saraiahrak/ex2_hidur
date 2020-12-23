// Dekel Yosef 315634071
// Sarai Ahrak 204894000

function memoize(f) {
    let results = {};

    return function () {
        console.log(arguments);
        // let args = Array.prototype.join.call(...arguments, '#');
        let args = JSON.stringify(arguments);
        console.log('args:', args);
        if (args in results) {
            console.log('Here!', arguments);
        }
        return args in results ? results[args] : results[args] = f(...arguments);
    };
}


// function printer(x, y) {
//     console.log(x);
//     console.log(y);
// }
// let mem = memoize(printer);
//
// mem('Hi#', 'There');
// mem('Hi', '#There');
// mem('Hi', '#There');
