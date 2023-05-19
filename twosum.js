function twoSum(num, length, target) {
  for (let i = 0; i < length; i++) {
    for (let j = 1; j < length; j++) {
      if (num[i] + num[j] === target) {
        if (i !== j) {
          return [i, j];
        }
      }
    }
  }
}
let num = [2, 44, 22, 1];
let length = num.length;
let target = 24;
console.log(twoSum(num, length, target));
