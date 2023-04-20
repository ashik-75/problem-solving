function dayOfProgrammer(year) {
  // Write your code here

  let isLeapYear;

  if (year === 1918) {
    return `26.09.1918`;
  }

  if (year < 1918) {
    isLeapYear = year % 4 === 0;
  } else {
    isLeapYear = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  }

  if (isLeapYear) {
    return `12.09.${year}`;
  } else {
    return `13.09.${year}`;
  }
}

console.log(dayOfProgrammer(2017));
