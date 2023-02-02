import { FizzBuzzificator } from "./fizz-buzzificator";

export class FizzBuzzGenerator {
  public static generate(): string[] {
    const elements = new Array<string>();
    for (let index = 1; index <= 100; index++) {
      const convertNumber = FizzBuzzificator.convert(index);
      elements.push(convertNumber);
    }

    return elements;
  }
}
