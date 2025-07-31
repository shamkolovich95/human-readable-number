const returnWord = (digit, arr) =>
  Number(digit) === 0 ? '' : `${arr[digit]} `;
const anotherReturnWOrd = (digit, arr) => `${arr[digit]} `;

const checkNumber = (num) => num > 19;
const secondCheckNumber = (num) => num > 9;

module.exports = function toReadable(number) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const hundred = 'hundred ';

  if (number < 10) {
    return ones[number];
  }

  if (number < 20) {
    return teens[number - 10];
  }

  if (number < 100) {
    const firstDigit = String(number)[0];
    const secondDigit = returnWord(String(number)[1], ones);
    return `${tens[firstDigit]} ${secondDigit}`.trim();
  }

  const arr = String(number).split('');
  const tensOrTeens = Number(arr[1] + arr[2]);

  const firstDigit = returnWord(arr[0], ones);
  let secondDigit;

  if (checkNumber(tensOrTeens)) {
    secondDigit = returnWord(arr[1], tens);
  } else if (secondCheckNumber(tensOrTeens)) {
    secondDigit = anotherReturnWOrd(tensOrTeens - 10, teens);
  } else {
    secondDigit = returnWord(arr[2], ones);
  }

  const thirdDigit = returnWord(arr[2], ones);

  return tensOrTeens > 19
    ? (firstDigit + hundred + secondDigit + thirdDigit).trim()
    : (firstDigit + hundred + secondDigit).trim();
};
