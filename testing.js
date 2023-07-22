const { TestScheduler } = require("jest")

descbribe("calculator test", () => {
    descbribe("addition test", () => {
        test("should return 42", () => {
            expect(addition(20,22)).toBe(42);
        };)
    });
});