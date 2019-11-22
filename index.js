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
