export const fizzbuzz = (input) => {
  let word = ''
  if (input % 3 === 0) word += 'Fizz'
  if (input % 5 === 0) word += 'Buzz'
  return word || input
}
