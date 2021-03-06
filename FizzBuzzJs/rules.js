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
class BuzzRule extends Rule {
  constructor(nextRule) {
    super(nextRule);
  }
  apply(number) {
    if (number % 5 === 0) return "Buzz";

    return this.nextRule.apply(number);
  }
}
class FizzBuzzRule extends Rule {
  constructor(nextRule) {
    super(nextRule);
  }
  apply(number) {
    if (number % 3 == 0 && number % 5 == 0) return "FizzBuzz";

    return this.nextRule.apply(number);
  }
}

module.exports = {
  Default: DefaultRule,
  Fizz: FizzRule,
  Buzz: BuzzRule,
  FizzBuzz: FizzBuzzRule,
};
