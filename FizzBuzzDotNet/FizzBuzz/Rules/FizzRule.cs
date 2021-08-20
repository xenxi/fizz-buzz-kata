namespace FizzBuzz.Rules
{
    public class FizzRule : Rule
    {
        private readonly Rule nextRule;

        public FizzRule(Rule nextRule)
        {
            this.nextRule = nextRule;
        }

        public string Apply(IntValueObject number)
        {
            if (number.IsMultipleOf(3))
                return "Fizz";

            return nextRule.Apply(number);
        }
    }
}