function calcAverage(arr) {
  var sum=0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum/arr.length;
}
calcAverage([85, 90, 92]);

// 1. sum is not defined before the loop. It is NaN. When trying to += a number to NaN we receives NaN.

// 2. Th function is called "calcAverage". In order to get an average we need to divide the sum to number of elements (arr.length)
