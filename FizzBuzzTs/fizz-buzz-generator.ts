import { FizzBuzzificator } from "./fizz-buzzificator";

export class FizzBuzzGenerator {
  public static generate(): string[] {
    const numbers = this.generateNumbers();
    return this.convert(numbers);
  }

  private static generateNumbers = (): Array<number> =>
    Array.from({ length: 100 }, (_, i) => i + 1);

  private static convert = (numbers: Array<number>): Array<string> =>
    numbers.map((num) => FizzBuzzificator.convert(num));
}
