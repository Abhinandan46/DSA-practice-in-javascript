let arr = [2, 4, 6, 8];
let currentSize = arr.length;
function dequeue() {
    if (currentSize > 0) {
        const item = arr[0];
        for (let i = 1; i < currentSize; i++) {
            arr[i - 1] = arr[i];
        }   
        currentSize--;
        arr.length = currentSize;   
        return item;
    } else {    
        console.log("Queue is empty");
        return null;
    }   
}
dequeue();
dequeue();
console.log(arr);   