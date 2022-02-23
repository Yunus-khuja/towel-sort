
module.exports = function towelSort (matrix) {

module.exports = function (matrix) {
  if(typeof(matrix) === 'undefined') {
    return []
  };

  let result = [];
  let res = [];

  for(let i = 0; i < matrix.length; i++) {
    if(i % 2 === 0) {
      result = result.concat(matrix[i]);
      res = res.concat(matrix[i]);
    } else {
      result = result.concat(matrix[i].reverse());
      res = res.concat(matrix[i].reverse());
    }
  }

  return result;
}
  return res;
} 
