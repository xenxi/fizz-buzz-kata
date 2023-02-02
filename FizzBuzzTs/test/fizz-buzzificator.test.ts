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

  test("return FizzBuzz if divisible by 3 and 5", () => {
    [15, 30].forEach((numberDivisibleBy3And5) => {
      const result = FizzBuzzificator.convert(numberDivisibleBy3And5);

      expect(result).toBe("FizzBuzz");
    });
  });

  test("return the same number as text if it is not divisible by 3 or 5", () => {
    [1, 2, 4].forEach((numberNotDivisibleBy3And5) => {
      const result = FizzBuzzificator.convert(numberNotDivisibleBy3And5);

      expect(result).toBe(numberNotDivisibleBy3And5.toString());
    });
  });
});
