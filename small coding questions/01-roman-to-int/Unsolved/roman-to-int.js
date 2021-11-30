// Write a function that takes in a Roman Numeral string and returns its integer form
var romanNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

var romanToInt = function(str) {
    let accumulator = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === "I" && str[i + 1] === "V") {
            accumulator += 4;
            i++;
        } else if (str[i] === "I" && str[i + 1] === "X") {
            accumulator += 9;
            i++;
        } else if (str[i] === "X" && str[i + 1] === "L") {
            accumulator += 40;
            i++;
        } else if (str[i] === "X" && str[i + 1] === "C") {
            accumulator += 90;
            i++;
        } else if (str[i] === "C" && str[i + 1] === "D") {
            accumulator += 400;
            i++;
        } else if (str[i] === "C" && str[i + 1] === "M") {
            accumulator += 900;
            i++;
        } else {
            accumulator += romanNum[str[i]];
        }
    }
};
