// Program to count how many numbers are multiple of 1-9

function countMultiples(arr) {
  let result = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    // Checking for each divisor
    for (let j = 1; j <= 9; j++) {
      if (num % j === 0) {
        result[j]++;
      }
    }
  }

  console.log(result);
}

// Example
let inputArray = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
countMultiples(inputArray);
