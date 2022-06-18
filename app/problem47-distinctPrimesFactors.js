//////////////////////////////////////////////////////////////////
// Attempt 1: Modified Sieve of Eratosthenes
// Time Complexity: O(n)
// Space Complexity: O(n)
//////////////////////////////////////////////////////////////////

function main() {
    let n = 200000; // n is your search space
    let target = 4; // this is our target number of factors

    return findTarget(n, target);
}

function findTarget(n, target) {
    let factors = new Array(n).fill(0); // initialize an array of 0s with length n
    let count = 0; // this is a temp variable to store the

    // loop all numbers from 2 to n
    for (let i = 2; i <= n; i++) {
        // if the number has no factors, it is prime
        if (factors[i] == 0) {
            let num = i * 2;
            // now increment the factors of its multiples by 1 until it hits n
            while (num < n) {
                factors[num]++;
                num += i;
            }
            //reset the count
            count = 0;
        }
        // if the number of factors is the target we want
        else if (factors[i] == target) {
            // increment the counter
            count++;
            // if counter hit target, terminate
            if (count == target) {
                return i - target + 1;
            }
        }
        // if the number of factors isn't the target we want
        else {
            //reset the count
            count = 0;
        }
    }
    return "The search space need to be increased.";
}

console.log(main());

module.exports = { findTarget };
