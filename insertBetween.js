let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let x = readLine().split(" ");
let n = parseInt(x[0]);
let key = parseInt(x[1]);
let arr = readLine().split(" ").map(Number);
arr.push(key);
let swapped;
do {
  swapped = false;
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      swapped = true;
    }
  }
} while (swapped);
console.log(arr);
