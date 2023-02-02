export class FizzBuzzificator {
  public static convert(num: number): string {
    if (num % 5 === 0) return "Buzz";
    return "Fizz";
  }
}
