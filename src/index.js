/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  let len = preferences.length;

  for (let i = 0; i < len; i++) {
    let one = preferences[i] - 1;
    let two = preferences[one] - 1;
    let tree = preferences[two] - 1;

    if (tree === i) {
      count++;
    }
  }
  return Math.floor(count / 3);
};