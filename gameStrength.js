let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
function MergeSort(arr, l, r){
    if(l < r){
        let m = parseInt((l+r)/2);
        MergeSort(arr, l, m);
        MergeSort(arr, m+1, r);
        let L = [];
        let R = [];
        for(let i=l; i<=r; i++){
            if(i <= m){
                L.push(arr[i]);
            }
            else{
                R.push(arr[i]);
            }
        }
        let i = 0; j = 0; k = l;
        while(i < L.length && j < R.length){
            if(L[i] <= R[j]){
                arr[k] = L[i];
                i++; k++;
            }
            else{
                arr[k] = R[j];
                j++; k++;
            }
        }
        while(i < L.length){
            arr[k] = L[i];
            i++; k++;
        }
        while(j < R.length){
            arr[k] = R[j];
            j++; k++;
        }
    }
}
function Strength(n, arr){
    let max = arr[n-1];
    let diff = 0;
    for(let i=0; i<n; i++){
        diff += (i*arr[i]) - ((n-1-i)*arr[i]);
    }
    return diff*max;
}

let t= parseInt(readLine());
for(let i=0; i<t; i++){
    let n = parseInt(readLine());
    let arr = readLine().split(" ").map(Number);
    MergeSort(arr, 0, n-1);
    console.log(Strength(n, arr) % 1000000007);
}