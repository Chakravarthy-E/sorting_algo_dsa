let [n,q]=readLine().split(" ").map(Number);
let times=readLine().split(" ").map(Number);
let scores=readLine().split(" ").map(Number);
let question=[];
for(let i=0;i<n;i++){
    question.push([scores[i],times[i]])
}
question.sort((a,b) => {
return b[0]-a[0];
})
let c=[question[0][1]]
for(let i=1;i<question.length; i++){
    let last=c[c.length-1]
    c.push(last+question[i][1])
}
for(let i=0;i<q;i++){
    let quarry=parseInt(readLine());
    console.log(c[quarry-1])
}