/**
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/description/
 */

function balancedStringSplit(s: string): number {
  let countROnSequence = 0, countLOnSequence = 0, countBalance = 0;

  for (let i = 0; i < s.length; i++) {
      const currentChar = s[i];
      if (currentChar === 'R') countROnSequence ++;
      else if (currentChar === 'L') countLOnSequence ++;

      if (countROnSequence === countLOnSequence) {
          countBalance ++;
          countROnSequence = 0
          countLOnSequence = 0
      }
  }

  return countBalance
};