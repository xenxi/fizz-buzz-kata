namespace FizzBuzz.Rules
{
    public class BuzzRule : Rule
    {
        private readonly Rule nextRule;

        public BuzzRule(Rule nextRule)
        {
            this.nextRule = nextRule;
        }

        public string Apply(IntValueObject number)
        {
            if (number.IsMultipleOf(5))
                return "Buzz";

            return nextRule.Apply(number);
        }
    }
}