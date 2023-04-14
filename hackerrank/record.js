function breakingRecords(scores) {
  // Write your code here
  let max = 0;
  let min = 0;

  let minScore = scores[0];
  let maxScore = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > maxScore) {
      max += 1;
      maxScore = scores[i];
    }

    if (scores[i] < minScore) {
      min += 1;
      minScore = scores[i];
    }
  }

  return [max, min];
}

const res = breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);

console.log(res);
