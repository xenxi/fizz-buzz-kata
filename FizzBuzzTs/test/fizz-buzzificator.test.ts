import { FizzBuzzificator } from "../fizz-buzzificator";

describe("FizzBuzzificator should", () => {
  test("return Fizz if divisible by 3", () => {
    [3, 6].forEach((numberDivisibleBy3) => {
      const result = FizzBuzzificator.convert(numberDivisibleBy3);

      expect(result).toBe("Fizz");
    });
  });
});
