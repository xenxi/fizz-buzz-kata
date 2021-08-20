namespace FizzBuzz
{
    public sealed class IntValueObject
    {
        public IntValueObject(int value)
        {
            Value = value;
        }

        public int Value { get; }

        public static implicit operator int(IntValueObject number)
        {
            return number.Value;
        }

        public bool IsMultipleOf(int number)
        {
            return Value % number == 0;
        }

        public override string ToString()
        {
            return Value.ToString();
        }
    }
}