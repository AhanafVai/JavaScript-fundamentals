// function checkLeapYear(year) {
//   if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
//     console.log(year + " is a leap year");
//   } else {
//     console.log(year + " is not a leap year");
//   }
// }

// const year = 2400;

// checkLeapYear(year);

// program to check leap year
function checkLeapYear(year) {
  const leap = new Date(year, 1, 29).getDate() === 29;
  if (leap) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}

// take input
const year = 2048;

checkLeapYear(year);
