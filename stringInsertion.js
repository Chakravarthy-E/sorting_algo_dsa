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
function StringInsertion(str, n) {
  for (let i = 0; i < n; i++) {
    for (j = i; j > 0; j--) {
      if (str[j] < str[j - 1]) {
        let temp = str[j];
        str[j] = str[j - 1];
        str[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  console.log(str.join(""));
}
let str = readLine().split("");
let n = str.length;
StringInsertion(str, n);
