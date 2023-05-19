let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let T = parseInt(readLine());
for (let i = 0; i < T; i++) {
  let n = parseInt(readLine());
  let array = readLine().split(" ").map(Number);
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      if (array[j] < array[j - 1]) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
  console.log(array.join(" "));
}
