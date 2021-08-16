const Rules = require("./rules");

function fizzBuzzer(number) {
  const fizzBuzzRule = compositeRules();

  return fizzBuzzRule.apply(number);
}

function compositeRules() {
  const defaultRule = new Rules.Default(null);
  const fizzRule = new Rules.Fizz(defaultRule);
  const buzzRule = new Rules.Buzz(fizzRule);
  const fizzBuzzRule = new Rules.FizzBuzz(buzzRule);
  return fizzBuzzRule;
}

module.exports = fizzBuzzer;
