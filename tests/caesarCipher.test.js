import caesarCipher from "../assets/caesarCipher";


test("encryption is successful", () => {
    expect(caesarCipher("defend the east wall of the castle", 1)).toMatch("efgfoe uif fbtu xbmm pg uif dbtumf");

})

test("encryption is successful", () => {
    expect(caesarCipher("I like to wear hats", 3)).toMatch("l olnh wr zhdu kdwv")
})


test("z to a", () => {
    expect(caesarCipher("z", 1)).toMatch("a");
})



test("punctuations", () => {
    expect(caesarCipher("defend the east ,wall of t!he castle.", 1)).toMatch("efgfoe uif fbtu ,xbmm pg u!if dbtumf.")
})