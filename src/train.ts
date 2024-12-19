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


// // H-2 TASK

// function getDigits(inputString: string): string {
//   return inputString
//     .split('')
//     .filter(char => /\d/.test(char))
//     .join('');
// }

// const result = getDigits("m14i1t");
// console.log(result);
// const result2 = getDigits("m2456ion5jb5t");
// console.log(result2);

// const result3 = getDigits("n784n4j4n34h459b");
// console.log(result3);
// const result4 = getDigits("m8m34k4n9b");
// console.log(result4);

/* Project Standarts:
  -Logging standarts
  -Naming standarts:
     function, method, variable => CAMEL
      class => PASCAL
     folder, file => KEBAB
     CSS => SNAKE
  -Error handling

  */

  /*
    Traditional Api
    Rest Api
    GraphQL Api
    ...
  */

// // I-TASK

// function majorityElement(arr: number[]): number | null {
//   const countMap: Record<number, number> = {};
//   let maxElement: number | null = null;
//   let maxCount = 0;

//   for (const num of arr) {
//       countMap[num] = (countMap[num] || 0) + 1;
//       if (countMap[num] > maxCount) {
//           maxCount = countMap[num];
//           maxElement = num;
//       }
//   }

//   return maxElement;
// }

// console.log(majorityElement([5, 3, 5, 2, 3, 4, 5, 9, 3, 4]));
// console.log(majorityElement([2, 5, 1, 2, 2, 8, 3, 3, 3]));
// console.log(majorityElement([9, 7, 7, 8, 1, 1]));

// J-TASK

function findLongestWord(sentence: string): string {
  const words = sentence.split(" ");

  const longestWord = words.reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
  }, "");

  return longestWord;
}

const result = findLongestWord("나는 감정스러운 사람이다");
console.log(result);

const result2 = findLongestWord("Korean peoples are so kind");
console.log(result2);

const result3 = findLongestWord("O'zbekiston vatanim manim");
console.log(result3);
