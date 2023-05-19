let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
// 2
// 5
// 5 10 2 4 -12
// 4
// 12 89 90 7
/*
no of testcases 2,
1st test case is---- 5 10 2 4 -12
2nd test case is ----12 89 90 7
output
1-> -12 2 4 5 10
2-> 7 12 89 90
*/
function insertionSort(arr, n, arr2, n2) {
  for (let i = 1; i < n; i++) {
    for (j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } 
      else
      {
        break;
      }
    }
  }
  for (let i = 1; i < n2; i++) {
    for (j = i; j > 0; j--) {
      if (arr2[j] < arr2[j - 1]) {
        let temp = arr[j];
        arr2[j] = arr2[j - 1];
        arr2[j - 1] = temp;
      } 
      else
      {
        break;
      }
    }
  }
  console.log(arr.join(" "))
  console.log(arr2.join(" "))
}

let t = parseInt(readLine());
let n = parseInt(readLine());
let x = readLine().split(" ");
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(parseInt(x[i]));
}
let n2 = parseInt(readLine());
let y = readLine().split(" ");
let arr2 = [];
for (let i = 0; i < n2; i++) {
  arr2.push(parseInt(y[i]));
}
insertionSort(arr, n, arr2, n2);
