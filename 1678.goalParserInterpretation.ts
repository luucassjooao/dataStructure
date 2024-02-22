/**
 * https://leetcode.com/problems/goal-parser-interpretation/description/
 */

function interpret(command: string): string {
  return command.replaceAll('()', 'o').replaceAll('(al)', 'al')
};  