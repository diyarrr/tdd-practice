const calculator = require("../assets/calculator");




test("adding two number appropriately", () => {
    expect(calculator.add(1, 2)).toBe(3);
})

test("subtracting two numbers appropriately", () => {
    expect(calculator.substract(10, 8)).toEqual(2);
})


test("dividing two number appropriately", () => {
    expect(calculator.divide(35, 7)).toEqual(5);
})

test("dividing with 0 is null", () => {
    expect(calculator.divide(83, 0)).toEqual(null);
})

test("multiplying two numbers appropriately", () => {
    expect(calculator.multiply(3, 5)).toEqual(15);
})