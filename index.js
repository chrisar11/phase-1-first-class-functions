function receivesAFunction(callback) {
    callback()
}

function someFunction() {
    return 'Some Function.';
}

function returnsANamedFunction() {
   return someFunction;
}

function returnsAnAnonymousFunction () {
    return function() {
    }
}