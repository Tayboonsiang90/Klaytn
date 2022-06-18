//////////////////////////////////////////////////////////////////
// // Attempt 1: Brute force method
// // Time Complexity: n*log(n)*sqrt(n)
// // Space Complexity: 1
//////////////////////////////////////////////////////////////////

// function main() {
//     // initialize counter to 0
//     let counter = 0;
//     // for 1 to 1 million
//     for (let i = 1; i < 1000000; i++) {
//         // check if the number is a circular prime
//         if (checkCircularPrime(i)) {
//             counter++;
//         }
//     }
//     return counter;
// }

// // checkCircularPrime: checks if all rotations are themselves prime
// // Input: positive integer
// // Output: true if circular prime, false if not circular prime
// function checkCircularPrime(i) {
//     i = i.toString();
//     let numOfdigits = i.length;
//     // rotate the digits for length times
//     for (let j = 0; j < numOfdigits; j++) {
//         i = rotate(i.toString());
//         // check if it is a prime number, return false if not prime
//         if (!checkPrime(Number(i))) {
//             return false;
//         }
//     }
//     //this number is circular prime
//     return true;
// }

// // rotate: first digit has moved to the last digit
// // Input: positive integer (string)
// // Output: positive integer (string) where the first digit has moved to the last digit
// function rotate(num) {
//     // rotate the string
//     return num.slice(-1) + num.slice(0, -1);
// }

// // checkPrime: O(sqrt(n)) function to check if a number is prime
// // Input: Positive integer
// // Output: True if prime, false if not-prime
// function checkPrime(i) {
//     // special case for i = 1
//     if (i == 1) {
//         return false;
//     }
//     // for j = 2 to sqrt(i)
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//         // if i is divisible by j
//         if (i % j == 0) {
//             return false;
//         }
//     }
//     // a factor wasn't found
//     return true;
// }

// console.log(main());

//////////////////////////////////////////////////////////////////
// // Attempt 2: Modified Sieve of Eratosthenes
//////////////////////////////////////////////////////////////////

function main() {

}