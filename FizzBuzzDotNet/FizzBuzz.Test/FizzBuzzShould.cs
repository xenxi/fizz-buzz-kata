using System.Collections.Generic;
using System.Linq;
using FluentAssertions;
using NUnit.Framework;

namespace FizzBuzz.Test
{
    [TestFixture]
    public class FizzBuzzShould
    {
        [Test]
        [TestCaseSource(nameof(GetNumbersFrom1To100NoMultiplesOf3And5))]
        public void return_number_as_string(int number)
        {
            var result = FizzBuzzer.Convert(number);

            result.Should().Be($"{number}");
        }

        [Test]
        [TestCaseSource(nameof(GetNumbersFrom1To100MultiplesOf3AndNoOf5))]
        public void return_fizz_from_multiples_of_3(int number)
        {
            var result = FizzBuzzer.Convert(number);

            result.Should().Be("Fizz");
        }

        [Test]
        [TestCaseSource(nameof(GetNumbersFrom1To100MultiplesOf5AndNoOf3))]
        public void return_buzz_from_multiples_of_5(int number)
        {
            var result = FizzBuzzer.Convert(number);

            result.Should().Be("Buzz");
        }

        [Test]
        [TestCaseSource(nameof(GetNumbersFrom1To100MultiplesOf5And3))]
        public void return_fizz_buzz_from_multiples_of_3_and_5(int number)
        {
            var result = FizzBuzzer.Convert(number);

            result.Should().Be("FizzBuzz");
        }

        public static IEnumerable<int> GetNumbersFrom1To100MultiplesOf5And3()
        {
            return GetNumbersFrom1To100()
                .Where(num => num.IsMultipleOf(5)
                              && num.IsMultipleOf(3))
                .Select(x => x.Value);
        }

        public static IEnumerable<int> GetNumbersFrom1To100MultiplesOf5AndNoOf3()
        {
            return GetNumbersFrom1To100()
                .Where(num => num.IsMultipleOf(5)
                              && !num.IsMultipleOf(3))
                .Select(x => x.Value);
        }

        public static IEnumerable<int> GetNumbersFrom1To100MultiplesOf3AndNoOf5()
        {
            return GetNumbersFrom1To100()
                .Where(num => num.IsMultipleOf(3)
                              && !num.IsMultipleOf(5))
                .Select(x => x.Value);
        }

        public static IEnumerable<int> GetNumbersFrom1To100NoMultiplesOf3And5()
        {
            return GetNumbersFrom1To100()
                .Where(num => !num.IsMultipleOf(3)
                              && !num.IsMultipleOf(5))
                .Select(x => x.Value);
        }

        public static IEnumerable<IntValueObject> GetNumbersFrom1To100()
        {
            return Enumerable.Range(1, 100)
                .Select(x => new IntValueObject(x));
        }
    }
}