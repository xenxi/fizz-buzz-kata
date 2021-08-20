namespace FizzBuzz.Rules
{
    public class FizzBuzzRule : Rule
    {
        private readonly Rule nextRule;

        public FizzBuzzRule(Rule nextRule)
        {
            this.nextRule = nextRule;
        }

        public string Apply(IntValueObject number)
        {
            if (number.IsMultipleOf(3) && number.IsMultipleOf(5))
                return "FizzBuzz";

            return nextRule.Apply(number);
        }
    }
}