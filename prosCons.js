let t = parseInt(readLine());
while (t--) {
  let n = parseInt(readLine());
  let angerSum = 0;
  let girls = [];
  for (let i = 0; i < n; i++) {
    let girl = readLine().split(" ").map(Number);
    girls.push(girl);
    angerSum += girl[1];
  }
  let maxHappiness =
    girls[0][0] + girls[1][0] - (angerSum - (girls[0][1] + girls[1][1]));
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let currentFavourSum = girls[i][0] + girls[j][0];
      let remainingAngerSum = angerSum - (girls[i][1] + girls[j][1]);
      let currentHappiness = currentFavourSum - remainingAngerSum;

      if (maxHappiness < currentHappiness) {
        maxHappiness = currentHappiness;
      }
    }
  }
  console.log(maxHappiness);
}
