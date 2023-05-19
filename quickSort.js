let fs = require("fs");
const { pid } = require("process");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let t = parseInt(readLine());
let partition = (arr, l, r) => {
  let pIndex = l;
  for (let i = l; i <= r - 1; i++) {
    if (arr[i] <= arr[r]) {
      let temp = arr[i];
      arr[i] = arr[pIndex];
      arr[pIndex] = temp;
      pIndex++;
    }
  }
  let temp = arr[r];
  arr[r] = arr[pIndex];
  arr[pIndex] = temp;
  return pIndex;
};
const quickSort = (arr, l, r) => {
  if (l < r) {
    let pIndex = partition(arr, l, r);
    quickSort(arr, l, pIndex - 1);
    quickSort(arr, pIndex + 1, r);
  }
};
while (t--) {
  let n = parseInt(readLine());
  let arr = readLine().split(" ").map(Number);
  quickSort(arr,0, n - 1);
  console.log(...arr)
}
