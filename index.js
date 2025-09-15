
function receivesAFunction(myCallback) {
  return myCallback(); 
}

function returnsANamedFunction() {
  return function namedFunction() {
    return "was returned";
  }
}

function returnsAnAnonymousFunction() {
  return function() {
    return "anonymous";
  }
}