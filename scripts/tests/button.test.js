/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeEach (() => {
    document.body.innerHTML = "<p id='par'></p>";
});

describe("DOM test", () => {
    test("expect p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
})