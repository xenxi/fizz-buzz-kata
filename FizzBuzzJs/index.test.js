const fizzBuzzer = require('./index');

describe('FizzBuzzer should', () => {
    test('return 1', () => {
        expect(fizzBuzzer(1)).toBe('1');
    });    
});

describe('FizzBuzzer should', () => {
    test('return 2', () => {
        expect(fizzBuzzer(2)).toBe('2');
    });    
});