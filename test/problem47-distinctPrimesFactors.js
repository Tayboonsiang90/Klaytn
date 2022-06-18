const distinctPrimeFactors = require("../app/problem47-distinctPrimesFactors.js");

const chai = require("chai");
const expect = chai.expect;

describe("problem47-distinctPrimesFactors.js", () => {
    context("findTarget(n, target)", () => {
        it("Should return the first of the 2 consecutive integers to have 2 distinct prime factors each for n = 20, target = 2", () => {
            expect(distinctPrimeFactors.findTarget(20, 2)).to.equal(14);
        });
        it("Should return the first of the 3 consecutive integers to have 3 distinct prime factors each for n = 1000, target = 3", () => {
            expect(distinctPrimeFactors.findTarget(1000, 3)).to.equal(644);
        });
        it("Should return the first of the 4 consecutive integers to have 4 distinct prime factors each for n = 200000, target = 4", () => {
            expect(distinctPrimeFactors.findTarget(200000, 4)).to.equal(134043);
        });
    });
});
