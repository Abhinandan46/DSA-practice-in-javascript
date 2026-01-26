let arr = [2, 4, 1, 6, 4, 8, 3, 5];
let position = 4; // index to delete (0-based)

for (let i = position; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
}

arr.length = arr.length - 1;

console.log(arr);
