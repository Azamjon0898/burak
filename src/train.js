console.log("Train Area:");

// H-TASK

function getPositive(arr) {
    return arr.filter(num => num > 0).join('');
  }
  
  // Misol uchun
  console.log(getPositive([1, -4, 2]));
  console.log(getPositive([1, -4, 2, 5, -10]));
  console.log(getPositive([-1, -16, 6, 27]));
  console.log(getPositive([-19, -21,, 9, 101, 30]));

  