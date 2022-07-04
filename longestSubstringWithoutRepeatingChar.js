/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const pn = []
    if (x < 0) {
        x = x * -1
        pn[0] = -1
    }else{ pn[0] = 1}
    console.log(pn[0]);
  let str = '' + x;
  let reverse = '';
  for (i = 0; i < str.length; i++) {
    reverse = str[i] + reverse;
  }
  reverseNumber = reverse - 0;
  reverseNumber = reverseNumber * pn[0]
  console.log(reverse);
  if (x === reverseNumber) {
    return true;
  } else {
    return false;
  }
};
