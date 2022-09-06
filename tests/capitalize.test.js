import capitalize from "../assets/capitalize";

test("First letter is capitalized", () => {
    expect(capitalize("diyar")).toEqual("Diyar");
})