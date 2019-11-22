// Your code here
function mapToNegativize(arr) {
  for(const e in arr) {
    arr[e]*= -1;
  }
  return arr
}

function mapToNoChange(arr) {
  return arr
}