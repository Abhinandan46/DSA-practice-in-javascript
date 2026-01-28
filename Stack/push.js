let a = []
let max = 5

function push(element) {
    a[a.length] = element
    return a.length
}


push(10) // 1
push(20) // 2
push(30) // 3 

console.log(a) // [10, 20, 30]  