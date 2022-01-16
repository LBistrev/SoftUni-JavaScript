const testNumbers = require('./testNumbers')
const { expect } = require('chai')

describe('Test Numbers', () => {

    describe("sumNumbers", () => {
        it('works with valid numbers', () => {
            expect(testNumbers.sumNumbers(3, 5)).to.equal("8.00");
        });
        it('works with negative numbers', () => {
            expect(testNumbers.sumNumbers(1.555, 0.333)).to.equal(undefined);
        })
    })

    describe('numberChecker', () => {
        it('works with even value', () => {
            expect(testNumbers.numberChecker(1)).to.contain('odd');
        });

        it('works with odd value', () => {
            expect(testNumbers.numberChecker(2)).to.contain('even');
        });
        it('works with string', () => {
            expect(testNumbers.numberChecker("1")).to.contain('odd');
        });
    })
})
