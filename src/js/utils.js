const collectionToArray = (collection) => {
  let arr = [];
  for (let i = 0; i < collection.length; i++) {
    arr[i] = collection[i];
  }
  return arr;
}

function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}


module.exports = {
  collectionToArray,
  throttle
}