function BubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
let arr = [4, -2, 3, -1, 8];
let n = arr.length;
BubbleSort(arr);
console.log(arr);
