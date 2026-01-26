// let arr1=[ 1,3,5,7];
// let arr2=[2,4,6,8];
// let mergedArray=[];
// for(let i=0;i<arr1.length;i++){
//     mergedArray.push(arr1[i]);
// }   
// for(let j=0;j<arr2.length;j++){
//     mergedArray.push(arr2[j]);
// }
// console.log(mergedArray);


//second way
// let arr1 = [1, 3, 5, 7];
// let arr2 = [2, 4, 6, 8];
// let mergedArray = [];
// for (let i = 0; i < arr1.length; i++) {
//     mergedArray[i] = arr1[i];
// }
// for (let j = 0; j < arr2.length; j++) {
//     mergedArray[arr1.length + j] = arr2[j];
// }   
// console.log(mergedArray);   

//third way
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
let mergedArray = [];
let a1 = 0;
let a2 = 0;
let k = 0;  
while (a1 < arr1.length && a2 < arr2.length) {
    if (arr1[a1] < arr2[a2]) {
        mergedArray[k] = arr1[a1];
        a1++;
    } else {
        mergedArray[k] = arr2[a2];
        a2++;
    }
    k++;
}
while (a1 < arr1.length) {
    mergedArray[k] = arr1[a1];
    a1++;
    k++;
}
while (a2 < arr2.length) {
    mergedArray[k] = arr2[a2];
    a2++;
    k++;
}       
console.log(mergedArray);