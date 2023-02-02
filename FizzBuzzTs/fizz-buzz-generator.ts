import { FizzBuzzificator } from "./fizz-buzzificator";

export class FizzBuzzGenerator {
  public static generate(): string[] {
    const elements = Array.from({length: 100}, (_, i) => i + 1);
    return elements.map((num) => FizzBuzzificator.convert(num));
  }
}
