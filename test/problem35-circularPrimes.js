const circularPrimes = require("../app/problem35-circularPrimes");

const chai = require("chai");
const expect = chai.expect;

describe("problem35-circularPrimes.js", () => {
    context("countCircularPrimes(n)", () => {
        it("Should return the number of circular primes below 100, n=100", () => {
            expect(circularPrimes.countCircularPrimes(100)).to.equal(13);
        });
        it("Should return the number of circular primes below one million, n=1000000", () => {
            expect(circularPrimes.countCircularPrimes(1000000)).to.equal(55);
        });
    });
});
