import analyzeArray from "../assets/analyzeArray";


test("average is correct", () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toEqual(4);
})

test("min is correct", () => {
    expect(analyzeArray([1,8,3,4,2,6]).min).toEqual(1);
})

test("max is correct", () => {
    expect(analyzeArray([1,8,3,4,2,6]).max).toEqual(8);
})

test("length is correct", () => {
    expect(analyzeArray([1,8,3,4,2,6]).length).toEqual(6);
})


