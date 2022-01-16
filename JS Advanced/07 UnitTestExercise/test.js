const {expect, assert} = require('chai');

const {  mathEnforcer } = require("./module");

/*
 Function isOddOrEven
describe('it works', () => {
    it("return undefined with no string input", () => {
        expect(isOddOrEven(5)).to.be.undefined
        expect(isOddOrEven([])).to.be.undefined
        expect(isOddOrEven({})).to.be.undefined
    })
    it("return even", () => {
        expect(isOddOrEven("baba")).to.be.equal("even")
    })
    it("return odd", () => {
        expect(isOddOrEven("bab")).to.be.equal("odd")
    })
    it("return odd with longer string", () => {
        expect(isOddOrEven("work with mind")).to.be.equal("even")
    })
    it("return odd with different string length", () => {
        expect(isOddOrEven("works without")).to.be.equal("odd")
    })
    
})


Function lookupChar
describe ("Char Lookup tests", () => {
    it("if both parameter are not corect return undefined", () => {
        expect(lookupChar(1, [1])).to.be.undefined
    })
    it("if first parameter not corect return undefined", () => {
        expect(lookupChar(1, 1)).to.be.undefined
    })
    it("if second parameter not corect return undefined", () => {
        expect(lookupChar("dtr", [1])).to.be.undefined
    })

    it("if both parameter are corect return value", () => {
        expect(lookupChar("str", 1)).to.be.equal("t")
    })
    it("if both parameter are corect with index out of range return incorrect index", () => {
        expect(lookupChar("str", 5)).to.be.equal("Incorrect index")
    })
    it("if both parameter are corect with negative index return incorrect index", () => {
        expect(lookupChar("str", -5)).to.be.equal("Incorrect index")
    })
    it("if both parameter are corect return value", () => {
        expect(lookupChar("str", 1.5)).to.be.undefined
    })
})
*/

describe ("mathEnforcer tests", () => {
    describe("addFive methods", () => {
        it("return undefined with incorrect parameter", () => {
            expect(mathEnforcer.addFive("m")).to.be.undefined
        })
        it("return undefined with incorrect parameter", () => {
            expect(mathEnforcer.addFive(["m"])).to.be.undefined
        })
        it("return undefined with incorrect parameter", () => {
            expect(mathEnforcer.addFive({})).to.be.undefined
        })

        it("return corect result with correct parameter number", () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10)
            expect(mathEnforcer.addFive(-5)).to.be.equal(0)
            expect(mathEnforcer.addFive(5.05)).to.be.closeTo(10.05, 0.01)
        })
        
    })
    describe("subtract method", () => {
        it("return undefined with incorrect parameter", () => {
            expect(mathEnforcer.subtractTen("m")).to.be.undefined
        })
        it("return undefined with incorrect parameter", () => {
            expect(mathEnforcer.subtractTen(["m"])).to.be.undefined
        })
        it("return undefined with incorrect parameter", () => {
            expect(mathEnforcer.subtractTen({})).to.be.undefined
        })
        it("return corect result with correct parameter number", () => {
            expect(mathEnforcer.subtractTen(5)).to.be.equal(-5)
        })
        it("return corect result with correct parameter number", () => {
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20)
        })
        it("return corect result with correct parameter number", () => {
            expect(mathEnforcer.subtractTen(20)).to.be.equal(10)
        })
    })
    describe("sum method", () => {
        it("return undefined with invalid parameters", () => {
            expect(mathEnforcer.sum("str", "str")).to.be.undefined
        })
        it("return undefined with invalid parameters", () => {
            expect(mathEnforcer.sum(5, "str")).to.be.undefined
        })
        it("return undefined with invalid parameters", () => {
            expect(mathEnforcer.sum("str", 5)).to.be.undefined
            expect(mathEnforcer.sum([], 5)).to.be.undefined
            expect(mathEnforcer.sum({}, 5)).to.be.undefined
            expect(mathEnforcer.sum("str", 5)).to.be.undefined
        })

        it("works correct", () => {
            expect(mathEnforcer.sum(5, 5)).to.be.equal(10)
            expect(mathEnforcer.sum(20, -10)).to.be.equal(10)
            expect(mathEnforcer.addFive(5.05, 5)).to.be.closeTo(10.05, 0.01)
        })
    })

})

