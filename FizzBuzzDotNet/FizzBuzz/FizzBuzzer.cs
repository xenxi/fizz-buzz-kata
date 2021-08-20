using FizzBuzz.Rules;

namespace FizzBuzz
{
    public class FizzBuzzer
    {
        private static FizzBuzzer instance;
        private readonly Rule rule;

        public FizzBuzzer()
        {
            var noMathRule = new NoMatchRule();
            var buzzRule = new BuzzRule(noMathRule);
            var fizzRule = new FizzRule(buzzRule);
            var fizzBuzzRule = new FizzBuzzRule(fizzRule);

            rule = fizzBuzzRule;
        }

        private static FizzBuzzer GetInstance()
        {
            return instance ??= new FizzBuzzer();
        }

        public static string Convert(int input)
        {
            var number = new IntValueObject(input);

            return GetInstance().rule.Apply(number);
        }
    }
}