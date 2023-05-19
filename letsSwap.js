let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// let t = parseInt(readLine());
// while (t--) {
//   let n = parseInt(readLine());
//   let a = readLine().split(" ").map(Number);
//   let b = readLine().split(" ").map(Number);
//   a.sort((x, y) => x - y);
//   b.sort((x, y) => y - x);
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     if (a[i] % b[i] == 0 || b[i] % a[i] == 0) {
//       sum++;
//     }
//   }
//   console.log(sum);
// }
let maximumBeautifulness = (n, permutation) => {
  let beautifullnes = 0;
  let i = 0;
  while (i < n) {
    beautifullnes += Math.abs(permutation[i] - (i + 1));
    i++;
  }
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let increase =
        Math.abs(permutation[i] - (j + 1)) +
        Math.abs(permutation[j] - (i + 1)) -
        Math.abs(permutation[i] - (i + 1)) -
        Math.abs(permutation[j] - (j + 1));
      max = Math.max(max, increase);
    }
  }

  return beautifullnes + max;
};
let n = parseInt(readLine());
let permutation = readLine().split(" ").map(Number);
console.log(maximumBeautifulness(n, permutation)); 
