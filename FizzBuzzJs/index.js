function fizzBuzzer(number) {
  if (isFizzBuzz(number)) return "FizzBuzz";
  if (isFizz(number)) return "Fizz";
  if (isBuzz(number)) return "Buzz";

  return `${number}`;
}

function isBuzz(number) {
  return number % 5 === 0;
}

function isFizz(number) {
  return number % 3 === 0;
}

function isFizzBuzz(number) {
  return number % 3 == 0 && number % 5 == 0;
}

module.exports = fizzBuzzer;
