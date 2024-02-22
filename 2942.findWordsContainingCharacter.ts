/**
 * https://leetcode.com/problems/find-words-containing-character/
 */

function findWordsContaining(words: string[], x: string): number[] {
  let countXChar = []

  for(let i = 0; i < words.length; i++) {
      if (words[i].includes(x)) countXChar.push(i)
  }

  return countXChar
};

function findWordsContaining2(words: string[], x: string): number[] {
  return words.flatMap((word, index) => word.includes(x) ? index : []);
};