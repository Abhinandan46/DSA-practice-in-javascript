// Find maximum element in an array
let ar = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let max = ar[0];
for (let i = 0; i < ar.length; i++) {
    if (ar[i] > max) {
        max = ar[i];
    }   
}
console.log("Maximum element in array is: " + max); 



//find minimum element in an array
let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let min = arr[0];   
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }   
}
console.log("Minimum element in array is: " + min); 



// Find second largest element in an array
let array = [5, 8, 12, 20, 7, 25, 30, 15];
let firstLargest = -Infinity;
let secondLargest = -Infinity;  
for (let i = 0; i < array.length; i++) {
    if (array[i] > firstLargest) {
        secondLargest = firstLargest;
        firstLargest = array[i];
    } else if (array[i] > secondLargest && array[i] !== firstLargest) {
        secondLargest = array[i];
    }
}
console.log("Second largest element in array is: " + secondLargest);  



// Find second smallest element in an array
let numbers = [15, 22, 8, 19, 31, 4, 27, 10];
let firstSmallest = Infinity;
let secondSmallest = Infinity;  
for (let i = 0; i < numbers.length; i++) {  
    if (numbers[i] < firstSmallest) {
        secondSmallest = firstSmallest;
        firstSmallest = numbers[i];
    }   else if (numbers[i] < secondSmallest && numbers[i] !== firstSmallest) { 
        secondSmallest = numbers[i];
    }   
}
console.log("Second smallest element in array is: " + secondSmallest);



//reverse an array in place
let arrayToReverse = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let left = 0;
let right = arrayToReverse.length - 1;
while (left < right) {
    // swap elements
    let temp = arrayToReverse[left];
    arrayToReverse[left] = arrayToReverse[right];
    arrayToReverse[right] = temp;
    left++;
    right--;
}   
console.log("Reversed array is: " + arrayToReverse);    

// Find duplicate elements in an array
let arrWithDuplicates = [1, 2, 3, 4, 5, 3, 2, 6, 7, 8, 5];
let duplicates = [];
let seen = new Set();
for (let i = 0; i < arrWithDuplicates.length; i++) {
    if (seen.has(arrWithDuplicates[i])) {
        if (!duplicates.includes(arrWithDuplicates[i])) {
            duplicates.push(arrWithDuplicates[i]);
        }   
    } else {
        seen.add(arrWithDuplicates[i]);
    }   
}
console.log("Duplicate elements in array are: " + duplicates);  

// Find missing number in an array of first n natural numbers
let n = 10;
let arrWithMissingNumber = [1, 2, 3, 4, 6, 7, 8, 9, 10];
let expectedSum = (n * (n + 1)) / 2;
let actualSum = 0;
for (let i = 0; i < arrWithMissingNumber.length; i++) {
    actualSum += arrWithMissingNumber[i];
}   
let missingNumber = expectedSum - actualSum;
console.log("Missing number in array is: " + missingNumber);    


// Find sum of all elements in an array 
let sumArray = [1, 2, 3, 4, 5];
let sum = 0;        
for (let i = 0; i < sumArray.length; i++) {
    sum += sumArray[i];
}
console.log("Sum of all elements in array is: " + sum);

//move all zeros to end of array
let arrayWithZeros = [0, 1, 0, 3, 12, 0, 5];
let nonZeroIndex = 0;   
for (let i = 0; i < arrayWithZeros.length; i++) {
    if (arrayWithZeros[i] !== 0) {
        arrayWithZeros[nonZeroIndex] = arrayWithZeros[i];
        nonZeroIndex++;
    }   
}
while (nonZeroIndex < arrayWithZeros.length) {
    arrayWithZeros[nonZeroIndex] = 0;
    nonZeroIndex++;
}   
console.log("Array after moving zeros to end: " + arrayWithZeros);

//separate even and odd numbers in an array
let mixedArray = [12, 17, 70, 15, 22, 65, 21, 90];
let evenIndex = 0;  
for (let i = 0; i < mixedArray.length; i++) {
    if (mixedArray[i] % 2 === 0) {
        // swap even number to the front
        let temp = mixedArray[evenIndex];
        mixedArray[evenIndex] = mixedArray[i];
        mixedArray[i] = temp;
        evenIndex++;
    }   
}
console.log("Array after separating even and odd numbers: " + mixedArray);  
//head recursion