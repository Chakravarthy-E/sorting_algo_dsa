let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let t=parseInt(readLine());
for(let i=0;i<t;i++)
{
    let n=parseInt(readLine());
    let B=readLine().split(" ").map(Number);
    let G=readLine().split(" ").map(Number);
    for(let j=0;j<n;j++)
    {
        let flag=false;
        for(let i=0;i<n-j-1;i++)
        {
             if(B[i]<B[i+1])
            {
                flag=true;
                let temp=B[i];
                B[i]=B[i+1];
                B[i+1]=temp;
            }
        }
        if(flag==false)
        {
            break;
        }
    }
    //---------------------------------------------
    for(let j=0;j<n;j++)
    {
        let flag=false;
        for(let i=0;i<n-j-1;i++)
        {
             if(G[i]>G[i+1])
            {
                flag=true;
                let temp=G[i];
                G[i]=G[i+1];
                G[i+1]=temp;
            }
        }
        if(flag==false)
        {
            break;
        }
    }
    let pair=0;
    for(let k=0;k<n;k++)
    {
        if(B[k]%G[k]==0 || G[k]%B[k]==0)
        {
            pair++;
        }
    }
    console.log(pair);
}