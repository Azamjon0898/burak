console.log("Train Area:");

// G-TASK

function getHighestIndex(numbers) {
    numbers.forEach((element, index) => {
      if (element == Math.max(...numbers)) {
        console.log("Ushbu 4, 67, 21, 3, 47, 80, 38 sonlarining eng kattasi:", element + " va uning indeksi: " + index);
      }
    });
  }
  getHighestIndex([4, 67, 21, 3, 47, 80, 38]);
  


console.log("Helllo World!");