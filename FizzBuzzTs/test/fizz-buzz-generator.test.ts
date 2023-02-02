import { FizzBuzzGenerator } from "../fizz-buzz-generator";

// Escribe un programa que imprima los números del 1 al 100, pero aplicando las siguientes normas:
// Devuelve Fizz si el número es divisible por 3.
// Devuelve Buzz si el número es divisible por 5.
// Devuelve FizzBuzz si el número es divisible por 3 y por 5.

describe("FizzBuzzGenerator should", () => {
  test("generate 100 elements", () => {
    const elements = FizzBuzzGenerator.generate();

    expect(elements.length).toBe(100);
  });
});
