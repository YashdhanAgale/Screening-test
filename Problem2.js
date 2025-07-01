// Program to generate series

function generateSeries(a) {
  let result = [];
  let num = 1;
  for (let i = 0; i < a; i++) {
    result.push(num);
    num = num + 2;
  }
  console.log(result.join(", "));
}

// Example
generateSeries(4);
