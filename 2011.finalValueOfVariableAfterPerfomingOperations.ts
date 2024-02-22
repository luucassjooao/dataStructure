/** 
 * https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/
*/

function finalValueAfterOperations(operations: string[]): number {
  let initNumber = 0;

  for (let i = 0; i < operations.length; i++) {
      if (operations[i].includes('-')) {
          initNumber -= 1
      } else {
          initNumber += 1
      }
  }

  return initNumber
};

function finalValueAfterOperations2(operations: string[]): number {
  let answer = 0;
  for(const operation of operations)
    answer = operation[1] === "+" ? answer + 1 : answer - 1;
  return answer;
};