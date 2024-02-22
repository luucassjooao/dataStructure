export function removeDuplicates(nums: number[]) {
  const numsDuplicates = [...nums];
  const setDuplicates = new Set<number>();

  for (let positionNums = 0; positionNums < numsDuplicates.length; positionNums++) {
    if (setDuplicates.has(numsDuplicates[positionNums])) {
      numsDuplicates.splice(positionNums, 1);
      positionNums--;
    }
    setDuplicates.add(numsDuplicates[positionNums]);
  }

  return { length: numsDuplicates.length, numsDuplicates };
}


console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))