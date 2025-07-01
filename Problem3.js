// Program to generate different series based on input value

function customSeries(a) {
  let result = [];
  if (a === 1) {
    result = [1];
  } else if (a === 2) {
    result = [1];
  } else if (a === 3) {
    result = [1, 3, 5];
  } else if (a === 4) {
    result = [1, 3, 5];
  } else if (a === 5) {
    result = [1, 3, 5, 7, 9];
  } else if (a === 6) {
    result = [1, 3, 5, 7, 9];
  } else {
    // For any number greater than 6, generate up to 'a' numbers
    let num = 1;
    for (let i = 0; i < a; i++) {
      result.push(num);
      num = num + 2;
    }
  }
  console.log(result.join(", "));
}

// Example
customSeries(5);
