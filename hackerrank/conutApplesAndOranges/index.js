function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let start = s;
  let end = t;
  let appleTree = a;
  let orangeTree = b;
  let appleCount = 0;
  let orangeCount = 0;
  for (let i = 0; i < apples.length; i++) {
    let apple = apples[i];
    let distance = apple + appleTree;
    if (distance >= start && distance <= end) {
      appleCount++;
    }
  }
  for (let i = 0; i < oranges.length; i++) {
    let orange = oranges[i];
    let distance = orange + orangeTree;
    if (distance >= start && distance <= end) {
      orangeCount++;
    }
  }
  console.log(appleCount);
  console.log(orangeCount);
}


countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);