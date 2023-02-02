export class FizzBuzzificator {
  public static convert(num: number): string {
    if (this.isDivisibleBy3(num) && this.isDivisibleBy5(num)) return "FizzBuzz";
    if (this.isDivisibleBy3(num)) return "Fizz";
    if (this.isDivisibleBy5(num)) return "Buzz";
    return num.toString();
  }

  private static isDivisibleBy3 = (num: number): boolean => num % 3 === 0;
  private static isDivisibleBy5 = (num: number): boolean => num % 5 === 0;
}
