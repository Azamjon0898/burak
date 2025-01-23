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


// const result3 = getDigits("nn784n4j4n34h459b");
// console.log(result3);
// const result4 = getDigits("m8lm34k4n9bb");
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


// // J-TASK

// function findLongestWord(sentence: string): string {
//   const words = sentence.split(" ");

//   const longestWord = words.reduce((longest, current) => {
//       return current.length > longest.length ? current : longest;
//   }, "");

//   return longestWord;
// }

// const result = findLongestWord("나는 감정스러운 사람이다");
// console.log(result);

// const result2 = findLongestWord("Korean peoples are so kind");
// console.log(result2);

// const result3 = findLongestWord("O'zbekiston vatanim manim");
// console.log(result3);


// // K-TASK

// function countVowels(str: string): number {
//   const vowels = "aeiouAEIOU";
//   let count = 0;

//   for (const char of str) {
//       if (vowels.includes(char)) {
//           count++;
//       }
//   }

//   return count;
// }

// console.log(countVowels("understand"));
// console.log(countVowels("Assalom Uzbekistan"));


// // L-TASK

// function reverseSentence(sentence: string): string {
//   const words = sentence.split(" ");
//   const reversedWords = words.map(word => word.split("").reverse().join(""));
//   return reversedWords.join(" ");
// }

// const input = ("We like coding");
// const result = reverseSentence(input);
// console.log(result);

// const input2 = "I love Uzbekistan";
// const result2 = reverseSentence(input2);
// console.log(result2);

// const input3 = "I am a coder not an engineer";
// const result3 = reverseSentence(input3);
// console.log(result3);


// // M-TASK

// type NumberSquare = {
//   number: number;
//   square: number;
// };

// function getSquareNumbers(numbers: number[]): NumberSquare[] {
//   return numbers.map(num => ({
//     number: num,
//     square: num * num,
//   }));
// }

// const result = getSquareNumbers([1, 2, 3]);
// console.log(result);

// const result2 = getSquareNumbers([4, 5, 6]);
// console.log(result2);

// const result3 = getSquareNumbers([7, 8, 9]);
// console.log(result3);


// // N-TASK

// function palindromCheck(input: string): boolean {
//   const cleanedInput = input.toLowerCase().replace(/[\W_]/g, "");

//   const reversedInput = cleanedInput.split("").reverse().join("");

//   return cleanedInput === reversedInput;
// }

// console.log("Ona:", palindromCheck("Ona"));
// console.log("Qozoq:", palindromCheck("Qozoq"));
// console.log("Aziza:", palindromCheck("Aziza"));
// console.log("Hello:", palindromCheck("Hello"));


// // O-TASK

// function calculateSumOfNumbers(arr: any[]): number {
//   return arr.reduce((sum, current) => {
//       return typeof current === 'number' ? sum + current : sum;
//   }, 0);
// }

// console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35]));
// console.log(calculateSumOfNumbers([12, "2", {son: 5}, false, 98]));
// console.log(calculateSumOfNumbers([71, "20", {son: 1}, false, 18]));
// console.log(calculateSumOfNumbers([0, "101", {son: 9}, true, 2]));


// // P-TASK

// function objectToArray(objectBox: any) {
//   let obj = Object.entries(objectBox);
//   let result: any = [];
//   obj.map((value, index) => {
//     result.push(value);
//   });
//   return result;
// }

// console.log(objectToArray({ a: 10, b: 20 }));


// // Q-TASK

// function hasProperty<T extends object>(obj: T, prop: string): boolean {
//   return prop in obj;
// }

// console.log(hasProperty({ name: "BMW", model: "M3", color: "BLACK" }, "color"));
// console.log(hasProperty({ name: "BOEING", model: "707", year: "2025" }, "year"));
// console.log(hasProperty({ name: "CHINA", language: "CHINESE", population: "1.4bln" }, "square"));


// // R-TASK

// function calculate(expression: string): number {
//   const parts = expression.split(' ').filter(Boolean);
//   const num1 = parseFloat(parts[0]);
//   const operator = parts[1];
//   const num2 = parseFloat(parts[2]);

//   switch (operator) {
//     case '+':
//       return num1 + num2;
//     case '-':
//       return num1 - num2;
//     case '*':
//       return num1 * num2;
//     case '/':
//       return num2 !== 0 ? num1 / num2 : NaN;
//     default:
//       throw new Error('Invalid operator');
//   }
// }

// console.log(calculate("1 + 3"));
// console.log(calculate("10 - 2"));
// console.log(calculate("4 * 5"));
// console.log(calculate("20 / 4"));


// // S-TASK

// function missingNumber(arr: number[]) {
//   arr.sort();
//   for (let i = 1; i < arr.length; i++) {
//     const diff = arr[i] - arr[i-1];
//     if (diff > 1) {
//       return arr[i-1] + 1;
//     }
//   }
// }

// console.log(missingNumber([0, 2, 3]));
// console.log(missingNumber([6, 5, 8]));
// console.log(missingNumber([9, 8, 6]));


// // T-TASK 

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   let mergedArray = [...arr1, ...arr2]; 
//   mergedArray.sort((a, b) => a - b); 
//   return mergedArray;
// }

// const result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// console.log(result);


// // U-TASK 

// function sumOdds(num: number) {
//   return Math.floor(num / 2);
// }

// console.log(sumOdds(9));
// console.log(sumOdds(11));
// console.log(sumOdds(12));


// V-TASK

function countChars(word: string) {
  const count: { [key: string]: number } = {};
  for (let char of word) {
    if (char in count) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  return count;
}

console.log(countChars("hello"));
console.log(countChars("salom"));
console.log(countChars("avtomobil"))