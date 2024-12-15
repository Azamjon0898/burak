console.log("Train Area:");

// // H-TASK

// function getPositive(arr) {
//     return arr.filter(num => num > 0).join('');
//   }
  
//   // Misol uchun
//   console.log(getPositive([1, -4, 2]));
//   console.log(getPositive([1, -4, 2, 5, -10]));
//   console.log(getPositive([-1, -16, 6, 27]));
//   console.log(getPositive([-19, -21,, 9, 101, 30]));


// H-2 TASK

function getDigits(inputString: string): string {
  return inputString
    .split('')
    .filter(char => /\d/.test(char))
    .join('');
}

const result = getDigits("m14i1t");
console.log(result);
const result2 = getDigits("m2456ion5jb5t");
console.log(result2);

const result3 = getDigits("n784n4j4n34h459b");
console.log(result3);
const result4 = getDigits("m8m34k4n9b");
console.log(result4);
