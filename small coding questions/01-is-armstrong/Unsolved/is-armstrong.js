// Write a function that takes a positive integer and returns true if the integer is an armstrong number, else return false. To find out if a number is an armstrong number, take each individual digit and raise it to the power of the length of the entire number and add the digits. If the sum equals the original number, the number is an armstrong number

var isArmstrong = function(num) {
    const number = prompt("Enter a positive integer");
    const numberOfDigits = number.length;
    let sum = 0;

    // create a temporary variable
    let temp = number;

    while (temp > 0) {

        let remainder = temp % 10;

        sum += remainder ** numberOfDigits;

        // removing last digit from the number
        temp = parseInt(temp / 10); // convert float into integer
    }

    if (sum == number) {
        console.log(`${number} is an Armstrong number`);
    }
    else {
        console.log(`${number} is not an Armstrong number.`);
    }
};
