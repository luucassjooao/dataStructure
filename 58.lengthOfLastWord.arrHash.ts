/**
 * https://leetcode.com/problems/length-of-last-word/description
 * Given a string s consisting of words and spaces, return the length of the last word in the string
 */

export function lengthOfLastWord(s: string): number {
  const splitWords = s.split(' ').filter(item => item.trim() !== '');
  return splitWords[splitWords.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))

function lengthOfLastWord2(s: string): number {
  return s.trimEnd()!.split(' ')!.pop()!.length
};