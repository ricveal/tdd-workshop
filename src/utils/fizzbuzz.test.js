import {fizzbuzz} from './fizzbuzz'

test('should return the number given', () => {
  expect(fizzbuzz(2)).toBe(2)
  expect(fizzbuzz(4)).toBe(4)
  expect(fizzbuzz(67)).toBe(67)
})

test('should return "Fizz" when the input is multiple of 3', () => {
  expect(fizzbuzz(3)).toBe('Fizz')
  expect(fizzbuzz(27)).toBe('Fizz')
  expect(fizzbuzz(81)).toBe('Fizz')
})

test('should return "Buzz" when the input is multiple of 5', () => {
  expect(fizzbuzz(5)).toBe('Buzz')
  expect(fizzbuzz(25)).toBe('Buzz')
  expect(fizzbuzz(70)).toBe('Buzz')
})

test('should return "FizzBuzz" when the input is multiple of 3 and 5', () => {
  expect(fizzbuzz(15)).toBe('FizzBuzz')
  expect(fizzbuzz(60)).toBe('FizzBuzz')
  expect(fizzbuzz(75)).toBe('FizzBuzz')
})
