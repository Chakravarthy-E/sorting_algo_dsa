// function sort012(arr, N) {
//     for (let i = 0; i < N - 1; i++) {
//     let flag = false;
    
//     for (let j = 0; j < N - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         flag = true;
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//     if (flag == false) {
//       break;
//     }
//   }

//   return arr.join(" ");
// }


let arr = [0, 2, 1, 2, 0];
let N = arr.length;
// console.log(sort012(arr, N));
for(let j=N-1;j>0;j--){ //1
    for(let i=0;i<j;i++){//
        if(arr[j]<arr[i]){
            let temp = arr[i]
            arr[i]=arr[j]
            arr[j]=temp;
        }
    }
}
console.log(arr.join(" "))
