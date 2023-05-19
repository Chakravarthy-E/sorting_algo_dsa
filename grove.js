function grovyle(s) {
  let s1 = " ";
  let s2 = " ";
  let val = s.split("").sort();
  for (let i = 0; i < s.length; i++) {
    if (i % 2 == 0) {
      s1 += val[i];
    } else {
      s2 += val[i];
    }
  }
  return s1 + s2.split("").reverse().join("");
}
let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
  let s = readLine();
  console.log(grovyle(s));
}
