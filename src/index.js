exports.min = function min (array) {
  if (isNaN(parseInt(array))) {
    return 0;
  }
  let mini = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < mini) {
      mini = array[i];
    }
  }
  return mini;
}

exports.max = function max (array) {
  if (isNaN(parseInt(array))) {
    return 0;
  }
  let maxi = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxi) {
      maxi = array[i];
    }
  }
  return maxi;
}

exports.avg = function avg (array) {
  if (isNaN(parseInt(array))) {
    return 0;
  }
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    average += array[i];
  }
  return average / array.length;
}
