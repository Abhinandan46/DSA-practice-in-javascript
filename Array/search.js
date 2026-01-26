let arr = [34, 66, 23, 78, 90, 12, 45];
let elementToFind = 78;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elementToFind) {
        console.log(`Element found at index: ${i}`);
        break;
    }
}   