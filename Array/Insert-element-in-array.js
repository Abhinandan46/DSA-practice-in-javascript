let arr=[2,4,1,6,4,8,3,5];
let element=10;
let position=3;
position = position - 1; // Adjust for 1-based position
for(let i=arr.length-1; i>=position; i--){
    arr[i+1] = arr[i];
}
arr[position] = element;
console.log(arr);   