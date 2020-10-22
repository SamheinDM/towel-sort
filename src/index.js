
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined) return [];

  let arr = matrix;

  for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % 2 === 0) {
      arr[i].reverse();
    }
  }
  let answer = [];

  function plus (el) {
    answer.push(el);
  }

  arr.forEach(plus);

  return answer.flat(1);
}
