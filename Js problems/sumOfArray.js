let sum = 0;
function arrayTotal(number) {
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    sum = sum + element;
  }
  return sum;
}

arrayTotal([44, 23, 34, 45, 45, 43, 65, 6]);
console.log(sum);
