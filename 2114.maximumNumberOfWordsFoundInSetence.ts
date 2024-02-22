/**
 * https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/description/
 */

function mostWordsFound(sentences: string[]): number {
  let numberWords = 0;

  for(let i = 0; i < sentences.length; i++) {
      const splitSentence = sentences[i].split(' ')
      numberWords = splitSentence.length > numberWords ? splitSentence.length : numberWords
  }

  return numberWords;
};

function mostWordsFound2(sentences: string[]): number {
  return Math.max(...sentences.map((v) => v.split(' ').length))
}