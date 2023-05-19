let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
class InsertBetween {
  constructor(arr, n) {
    for (let i = n; i >= 1; i--) {
      if (arr[i] < arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      }
    }
    console.log(...arr);
  }
}
let y = readLine().split(" ");
let n = parseInt(y[0]);
let key = parseInt(y[1]);
let arr = readLine().split(" ").map(Number);
arr.push(key);
let insert = new InsertBetween(arr, n);
