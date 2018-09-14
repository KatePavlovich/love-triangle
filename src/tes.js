function getLoveTrianglesCount(preferences = []) {
    let newArr = Array.from(new Set(preferences));
    let count = 0;
    let newArr2 = [];
    let len = newArr.length;
    
  
    for (let i = 0; i < len;) {
      newArr2.push([newArr[i], newArr[i + 1], newArr[i + 2]]);
      i = i + 3;
    }
  console.log(newArr2);
  let len2 = newArr2.length;
    for (let i = 0; i < len2; i++) {
      for (let j = 0; j < i.length; ) {
      if(i[0] + 1 === i[1] && i[0] - 1 === i[2]) {
        count++;
      }
    }
  }
    return count;
}