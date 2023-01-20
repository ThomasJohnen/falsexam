const { isEmpty } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

describe(" test for length of gamer tag", () => {
    test("should return false as the label length is less than 8", () => {
        const result = isRightLength("Label");
        expect(result).toBe(true);
    });

    test("should return false as the label length is less than 8", () => {
        const result = isSpecialChar("Label");
        expect(result).toBe(true);
    });

});

// TODO: Create tests suite for validation function
