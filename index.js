// Your code here
function mapToNegativize(arr) {
  for(const e in arr) {
    arr[e]*= -1;
  }
  return arr
}

function mapToDouble(arr) {
  for(const e in arr) {
    arr[e]*= 2;
  }
  return arr
}

function mapToNoChange(arr) {
  return arr
}

function mapToSquare(arr) {
  for(const e in arr) {
    arr[e]**= 2;
  }
  return arr
}

function mapToNegativize(arr) {
  for(const e in arr) {
    arr[e]*= -1;
  }
  return arr
}

function reduceToTotal(arr, accumulator=0) {
  for(const e in arr) {
    accumulator += e;
  }
  return accumulator
}
