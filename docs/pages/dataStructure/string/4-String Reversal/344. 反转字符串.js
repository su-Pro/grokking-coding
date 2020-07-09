/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  if (s === null || s.length < 2) {
    return s;
  }
  let i = 0,
    j = s.length - 1;
  while (i <= j) {
    swap(s, i++, j--);
  }
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return s;
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s, i = 0, j = s.length - 1) {
  // base case
  if (i >= j) {
    return;
  }
  // swap
  swap(s, i, j);
  reverseString(s, i + 1, j - 1);
  return s;
  function swap(s, i, j) {
    [s[i], s[j]] = [s[j], s[i]];
  }
};