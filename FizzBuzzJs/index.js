const Rules = require("./rules");

function fizzBuzzer(number) {
  const defaultRule = new Rules.Default(null);
  const fizzRule = new Rules.Fizz(defaultRule);
  const buzzRule = new Rules.Buzz(fizzRule);
  const fizzBuzzRule = new Rules.FizzBuzz(buzzRule);

  return fizzBuzzRule.apply(number);
}

module.exports = fizzBuzzer;
