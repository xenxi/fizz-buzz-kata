using FluentAssertions;
using NUnit.Framework;

namespace FizzBuzz.Test
{
    [TestFixture]
    public class IntValueObjectShould
    {
        [Test]
        [TestCase(3, 3)]
        [TestCase(6, 3)]
        [TestCase(9, 3)]
        [TestCase(5, 5)]
        [TestCase(10, 5)]
        [TestCase(15, 5)]
        public void be_multiples(int input, int multiple)
        {
            var numberValueObject = new IntValueObject(input);

            var result = numberValueObject.IsMultipleOf(multiple);

            result.Should().BeTrue();
        }

        [Test]
        [TestCase(3, 2)]
        [TestCase(3, 4)]
        [TestCase(3, 8)]
        [TestCase(5, 3)]
        [TestCase(5, 6)]
        [TestCase(5, 7)]
        public void not_be_multiples(int input, int multiple)
        {
            var numberValueObject = new IntValueObject(input);

            var result = numberValueObject.IsMultipleOf(multiple);

            result.Should().BeFalse();
        }
    }
}