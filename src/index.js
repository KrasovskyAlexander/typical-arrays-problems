
exports.min = function min (array=[]) {
  if(array.length ==0){
    return 0;
  }
  let min=array[0];
  for(let i = 1;i<array.length;i++){
    if(array[i]<min) {
      min=array[i];
    }
  }
  return min;
}

exports.max = function max (array=[]) {
  if(array.length ==0){
    return 0;
  }
  let max=array[0];
  for(let i = 1;i<array.length;i++){
    if(array[i]>max) {
      max=array[i];
    }
  }
  return max;
}

exports.avg = function avg (array=[]) {
  if(array.length ==0){
    return 0;
  }
  let count=0;
  for(let i = 0;i<array.length;i++){
    count+=array[i];
  }
  let result =count/array.length;
  return result;
}
