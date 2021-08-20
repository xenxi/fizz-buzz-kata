namespace FizzBuzz.Rules
{
    public class NoMatchRule : Rule
    {
        public string Apply(IntValueObject number)
        {
            return $"{number}";
        }
    }
}