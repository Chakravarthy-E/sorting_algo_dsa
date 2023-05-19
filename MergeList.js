let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// ---------------------------------
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rigthArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rigthArr));
}
function merge(leftArr, rigthArr) {
  let sortedArr = [];
  while (leftArr.length && rigthArr.length) {
    if (leftArr[0] <= rigthArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rigthArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rigthArr];
}
let m = parseInt(readLine());
let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < m; i++) {
  let a = readLine().split(" ").map(Number);
  arr = arr.concat(a);
}
console.log(mergeSort(arr).join(" "));
