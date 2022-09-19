function largestArray(numbers) {
  let largest = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

const ages = [23, 32, 5, 45, 57, 77, 96, 48];
const oldest = largestArray(ages);
console.log(oldest);
