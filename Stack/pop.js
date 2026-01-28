let arr=[60,22,45,78,90]
function pop(){
    if(arr.length==0){
        return "Stack Underflow"
    }   
    let poppedElement=arr[arr.length-1]
    arr.length=arr.length-1
    return poppedElement
}   
console.log(pop()) // 90
console.log(pop()) // 78
console.log(pop()) // 45
console.log(arr) // [60,22] 
