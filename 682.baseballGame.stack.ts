/**
 * https://leetcode.com/problems/baseball-game/description/
You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

An integer x.
Record a new score of x.
'+'.
Record a new score that is the sum of the previous two scores.
'D'.
Record a new score that is the double of the previous score.
'C'.
Invalidate the previous score, removing it from the record.
Return the sum of all the scores on the record after applying all the operations.

The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.
*/


function calPoints(operations: string[]): number {
  const stack: number[] = [];

  let sum = 0;

  for(let i = 0; i < operations.length; i++) {
    const current: any = operations[i]
    if(Number(current)) {
      stack.push(Number(current))
    } else if(current === 'D') {
      stack.push(stack[stack.length - 1] * 2)
    } else if(current === 'C') {
      stack.pop()
    }  else if (current === '+') {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2])
    }
  }

  while(stack.length !== 0) {
    sum += stack[stack.length - 1]
    stack.pop()
  }

  return sum;
}


function calPoints2(operations: string[]): number {
  let sum: number[] = [Number(operations[0])];
  for (let i = 1; i < operations.length; i++) {
      switch (operations[i]) {
          case "+":
              sum.push(sum[sum.length - 1] + sum[sum.length - 2]);
              break;
          case "D":
              sum.push(2 * sum[sum.length - 1]);
              break;
          case "C":
              sum.pop();
              break;
          default:
              sum.push(Number(operations[i]));
      }
  }

  return sum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};