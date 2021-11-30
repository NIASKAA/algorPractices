// Write a function that takes in an array of digits representing a non negative integer and add one to it. The digits are arranged such that the most significant digits are on the left and each element in the array contains a single digit
// Return the new array
// Solve without joining the digits array and modify the original array in place

var plusOne = function(digits) {
    let i = digits.length - 1;
    let carry = 1;
    let val = 0;

    while (i >= 0 && carry) {
      val = digits[i] + carry;
      carry = Math.floor(val / 10);
      digits[i] = val % 10;
      i--;
    }
    if (carry) digits.unshift(carry);
        return digits;
};
