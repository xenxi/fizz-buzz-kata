const fizzBuzzer = require("./index");

describe("FizzBuzzer should", () => {
  [
    {
      number: 1,
      expect: "1",
    },
    {
      number: 2,
      expect: "2",
    },
  ].forEach((testData) => {
    it(`return ${testData.expect}`, () => {
      expect(fizzBuzzer(testData.number)).toBe(testData.expect);
    });
  });

  test("return Fizz if divisible by 3", () => {
      expect(fizzBuzzer(3)).toBe('Fizz');
  });
});
