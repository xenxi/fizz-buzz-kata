function fizzBuzzer(number) {
  if (isFizzBuzz(number)) return "FizzBuzz";
  if (isBuzz(number)) return "Buzz";

  const defaultRule = new DefaultRule(null);
  const fizzRule = new FizzRule(defaultRule);

  return fizzRule.apply(number);
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

class Rule {
  constructor(nextRule) {
    this.nextRule = nextRule;
  }
  apply(number) {
    throw new Error("Abstract method!");
  }
}

class DefaultRule extends Rule {
  constructor(nextRule) {
    super(nextRule);
  }
  apply(number) {
    return `${number}`;
  }
}
class FizzRule extends Rule {
  constructor(nextRule) {
    super(nextRule);
  }
  apply(number) {
    if (number % 3 === 0) return "Fizz";

    return this.nextRule.apply(number);
  }
}

module.exports = fizzBuzzer;
