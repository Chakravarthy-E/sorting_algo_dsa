let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// ---------------------
// for (let i = parseInt(n/ 2); i < n; i++) {
//   for (let j = parseInt(n/ 2); j > n; j++) {
//     if (str[j] > str[j + 1]) {
//       let temp = str[j]
//       str[j] = str[j+1]
//       str[j+1]=temp;
//       // [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//     }
//     else{
//       break;
//     }
//   }
// }
// console.log(str.join(""));
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j >= 1 && arr[j] < arr[j - 1]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  return arr;
}
let str = readLine();
let middle = parseInt(str.length / 2);
let left = str.substring(0, middle);
let right = str.substring(middle);
let arr = right.split("");
insertionSort(arr);
console.log(left + arr.join(""));
