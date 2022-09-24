"use strict";
const function6 = require("./Exercise6");
test("positOrder", () => {
    let initialArray1 = [];
    initialArray1 = ["h", 5, "m", 8, 2, "e"];
    let finalPosition = [];
    finalPosition = ["e", "h", "m", 2, 5, 8];
    expect((initialArray1)).not.toEqual(finalPosition);
});
