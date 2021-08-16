const Rules = require("./rules");

let rules;

function fizzBuzzer(number) {
  const fizzBuzzRule = compositeRules();

  return fizzBuzzRule.apply(number);
}

function compositeRules() {
  if (rules) {
    return rules;
  }

  const defaultRule = new Rules.Default(null);
  const fizzRule = new Rules.Fizz(defaultRule);
  const buzzRule = new Rules.Buzz(fizzRule);

  rules = new Rules.FizzBuzz(buzzRule);

  return rules;
}

module.exports = fizzBuzzer;
