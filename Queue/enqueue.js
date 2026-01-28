let arr = [];
let maxSize = 10;
let currentSize = 0;
function enqueue(item) {
    if (currentSize < maxSize) {
        arr[currentSize] = item;
        currentSize++;
    } else {
        console.log("Queue is full");
    } 
}   
enqueue(5);
enqueue(10);
enqueue(15);
enqueue(20);
console.log(arr);