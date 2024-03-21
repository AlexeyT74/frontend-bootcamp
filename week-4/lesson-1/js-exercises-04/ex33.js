// ● debugging
// we want to sum all numbers in even cells in arrays of size 10: [1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30
function getSumOfEven(arr) {
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[8];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// According to Variables/Local arr is an array with indexes from 0 to 9. arr[10] should be underfined.
// Return value of the function is NaN. 
