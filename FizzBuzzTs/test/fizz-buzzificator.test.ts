import { FizzBuzzificator } from "../fizz-buzzificator";

describe("FizzBuzzificator should", () => {
  test("return Fizz if divisible by 3", () => {
    [3, 6].forEach((numberDivisibleBy3) => {
      const result = FizzBuzzificator.convert(numberDivisibleBy3);

      expect(result).toBe("Fizz");
    });
  });

  test("return Buzz if divisible by 5", () => {
    [5, 10].forEach((numberDivisible5) => {
      const result = FizzBuzzificator.convert(numberDivisible5);

      expect(result).toBe("Buzz");
    });
  });
});
