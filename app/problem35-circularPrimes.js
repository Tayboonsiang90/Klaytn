// ////////////////////////////////////////////////////////////////
// // Attempt 1: Brute force method
// // Time Complexity: O(n*log(n)*sqrt(n))
// // Space Complexity: O(1)
// ////////////////////////////////////////////////////////////////

// function countCircularPrimes(n) {
//     // initialize counter to 0
//     let counter = 0;
//     // for 1 to 1 million
//     for (let i = 1; i < n; i++) {
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

//////////////////////////////////////////////////////////////////
// Attempt 2: Modified Sieve of Eratosthenes
// Idea: A number isn't a circular prime if it is not a prime. Use the sieve for memoization.
// Time Complexity: O(n log log n)*(log(n))*(sqrt(n))*(1/log(n))
// Space Complexity: O(n)
//////////////////////////////////////////////////////////////////

function countCircularPrimes(n) {
    let isPrime = new Array(n).fill(true); // initialize an boolean array of true with length n
    let counter = 0; // this is a variable to store the number of circular primes

    // loop all numbers from 2 to n
    for (let i = 2; i <= n; i++) {
        // if the number is prime
        if (isPrime[i]) {
            // if the number is a circular prime, increment counter
            if (checkCircularPrime(i, isPrime)) {
                counter++;
            }

            // now mark the multiples that they are not prime until it hits n
            let num = i * 2;
            while (num < n) {
                isPrime[num] = false;
                num += i;
            }
        }
    }

    return counter;
}

// checkCircularPrime: O(log(n))*O(sqrt(n)) function checks if all rotations are themselves prime
// Input: positive integer
// Output: true if circular prime, false if not circular prime
function checkCircularPrime(i, isPrime) {
    i = i.toString();
    let numOfdigits = i.length;
    // rotate the digits for length times
    for (let j = 0; j < numOfdigits; j++) {
        i = rotate(i.toString());
        // An added memoization step to speed up
        if (!isPrime[i]) {
            return false;
        }
        // check if it is a prime number, return false if not prime
        if (!checkPrime(Number(i))) {
            return false;
        }
    }
    //this number is circular prime
    return true;
}

// rotate: O(1) function to move the first digit to the last digit
// Input: positive integer (string)
// Output: positive integer (string) where the first digit has moved to the last digit
function rotate(num) {
    // rotate the string
    return num.slice(-1) + num.slice(0, -1);
}

// checkPrime: O(sqrt(n)) function to check if a number is prime
// Input: Positive integer
// Output: True if prime, false if not-prime
function checkPrime(i) {
    // special case for i = 1
    if (i == 1) {
        return false;
    }
    // for j = 2 to sqrt(i)
    for (let j = 2; j <= Math.sqrt(i); j++) {
        // if i is divisible by j
        if (i % j == 0) {
            return false;
        }
    }
    // a factor wasn't found
    return true;
}

function main() {
    console.log(countCircularPrimes(1000000));
}

main();

module.exports = { countCircularPrimes };
